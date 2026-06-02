// Fallback coordinates for locations with no GPS data in the dive log
const locationFallbacks = {
  "Islamorada, FL": { lat: 24.9243, lng: -80.6278 },
  "Newport, RI":    { lat: 41.4901, lng: -71.3128 },
  "Kona, HI":       { lat: 19.6400, lng: -155.9969 },
  "St. Croix":      { lat: 17.7290, lng: -64.7520 },
  "St. Thomas":     { lat: 18.3358, lng: -64.8963 }
};

function buildLocationGroups(rawSites, tripLinks) {
  const groups = {};

  rawSites.forEach(entry => {
    const lat = parseFloat(entry.lat);
    const lng = parseFloat(entry.lng);
    const key = entry.location;

    if (!groups[key]) {
      groups[key] = {
        name: entry.location,
        country: entry.country,
        lats: [],
        lngs: [],
        siteNames: new Set(),
        count: 0,
        link: tripLinks[key] || null
      };
    }

    if (lat !== 0 && lng !== 0) {
      groups[key].lats.push(lat);
      groups[key].lngs.push(lng);
    }
    groups[key].siteNames.add(entry.site);
    groups[key].count++;
  });

  const result = [];
  Object.values(groups).forEach(g => {
    let lat, lng;
    if (g.lats.length > 0) {
      lat = g.lats.reduce((a, b) => a + b) / g.lats.length;
      lng = g.lngs.reduce((a, b) => a + b) / g.lngs.length;
    } else if (locationFallbacks[g.name]) {
      lat = locationFallbacks[g.name].lat;
      lng = locationFallbacks[g.name].lng;
    } else {
      return; // no coordinates available, skip
    }

    const siteNames = [...g.siteNames]
      .filter(s => s && s !== 'Unknown Site')
      .sort();

    result.push({
      name: g.name,
      country: g.country,
      lat,
      lng,
      dives: g.count,
      sites: siteNames,
      link: g.link
    });
  });

  return result;
}

function initDiveMap() {
  const container = document.getElementById('dive-map');
  if (!container) return;

  const rawSites = window.diveSiteData || [];
  const tripLinks = window.diveTripLinks || {};
  const diveSites = buildLocationGroups(rawSites, tripLinks);
  const maxDives = diveSites.reduce((max, s) => Math.max(max, s.dives), 1);

  const map = L.map('dive-map', {
    center: [20, 0],
    zoom: 2,
    minZoom: 2,
    maxZoom: 18,
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  function getMarkerSize(dives) {
    const minSize = 8;
    const maxSize = 24;
    const scale = (dives - 1) / (maxDives - 1 || 1);
    return minSize + (maxSize - minSize) * Math.sqrt(scale);
  }

  const markers = [];
  diveSites.forEach(site => {
    const size = getMarkerSize(site.dives);

    const markerHtml = `
      <div class="dive-pin" style="width: ${size}px; height: ${size}px;">
        <div class="dive-pin-inner"></div>
        <div class="dive-pin-pulse"></div>
      </div>
    `;

    const icon = L.divIcon({
      className: 'dive-marker',
      html: markerHtml,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -size / 2]
    });

    const marker = L.marker([site.lat, site.lng], { icon });

    const sitesHtml = site.sites.length
      ? `<div class="dive-popup-sites">${site.sites.join(' · ')}</div>`
      : '';

    const popupContent = `
      <div class="dive-popup">
        <div class="dive-popup-name">${site.name}</div>
        <div class="dive-popup-country">${site.country}</div>
        <div class="dive-popup-count">${site.dives} dive${site.dives !== 1 ? 's' : ''}</div>
        ${sitesHtml}
        ${site.link ? `<a href="${site.link}" class="dive-popup-link">View Photos →</a>` : ''}
      </div>
    `;

    marker.bindPopup(popupContent, {
      className: 'dive-popup-container',
      closeButton: false,
      offset: [0, -5]
    });

    marker.addTo(map);
    markers.push(marker);
  });

  if (markers.length > 0) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.15));
  }

  function handleResize() {
    map.invalidateSize();
  }
  window.addEventListener('resize', handleResize);
  setTimeout(handleResize, 100);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDiveMap);
} else {
  initDiveMap();
}
