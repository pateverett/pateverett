// Dive site data aggregated from CSV
const diveSites = [
  { name: "Lanai, HI", lat: 20.74442, lng: -156.88608, dives: 5, link: null },
  { name: "Maui, HI", lat: 20.7984, lng: -156.3319, dives: 20, link: null },
  { name: "Lembeh, Indonesia", lat: 1.47318, lng: 125.23467, dives: 21, link: "/scuba/2025/lembeh" },
  { name: "Raja Ampat, Indonesia", lat: -0.58881, lng: 130.50000, dives: 26, link: "/scuba/2025/raja" },
  { name: "Tubbataha Reef, Philippines", lat: 8.84640, lng: 119.89934, dives: 17, link: "/scuba/2024/tubbataha" },
  { name: "Flynn Reef, Australia", lat: -16.73410, lng: 146.26472, dives: 6, link: "/scuba/2024/australia" },
  { name: "Milln Reef, Australia", lat: -16.78780, lng: 146.26733, dives: 5, link: "/scuba/2024/australia" },
  { name: "Islamorada, FL", lat: 24.9243, lng: -80.6278, dives: 20, link: "/scuba/2023/islamorada" },
  { name: "Cozumel, Mexico", lat: 20.37915, lng: -87.02750, dives: 28, link: "/scuba/2023/cozumel" },
  { name: "Coronado Islands, Mexico", lat: 32.43151, lng: -117.27793, dives: 5, link: "/scuba/2023/coronado_islands" },
  { name: "Visayas, Philippines", lat: 10.5, lng: 124.5, dives: 16, link: "/scuba/2023/philippines" },
  { name: "San Diego, CA", lat: 32.76388, lng: -117.27691, dives: 6, link: null },
  { name: "Key Largo, FL", lat: 25.08658, lng: -80.30283, dives: 5, link: null },
  { name: "Molokai, HI", lat: 21.12982, lng: -156.70526, dives: 4, link: null },
  { name: "Monterey, CA", lat: 36.61237, lng: -121.89627, dives: 19, link: null },
  { name: "Carmel, CA", lat: 36.52387, lng: -121.92943, dives: 6, link: null },
  { name: "Nahant, MA", lat: 42.42070, lng: -70.90653, dives: 3, link: null },
  { name: "Gloucester, MA", lat: 42.60943, lng: -70.66720, dives: 1, link: null },
  { name: "Rockport, MA", lat: 42.65852, lng: -70.60736, dives: 3, link: null },
  { name: "Newport, RI", lat: 41.4901, lng: -71.3128, dives: 1, link: null },
  { name: "Cabo San Lucas, Mexico", lat: 22.89043, lng: -109.79828, dives: 6, link: null },
  { name: "Cabo Pulmo, Mexico", lat: 23.43882, lng: -109.42368, dives: 2, link: null },
  { name: "Lofoten, Norway", lat: 68.07821, lng: 13.54317, dives: 1, link: null },
  { name: "Kona, HI", lat: 19.6400, lng: -155.9969, dives: 9, link: null },
  { name: "Playa Del Carmen, Mexico", lat: 20.32591, lng: -87.39136, dives: 2, link: null },
  { name: "St. Croix, USVI", lat: 17.7290, lng: -64.7520, dives: 6, link: null },
  { name: "St. Thomas, USVI", lat: 18.3358, lng: -64.8963, dives: 3, link: null },
  { name: "British Virgin Islands", lat: 18.39215, lng: -64.46796, dives: 2, link: null },
  { name: "Grand Cayman", lat: 19.36333, lng: -81.39959, dives: 6, link: null }
];

function initDiveMap() {
  const container = document.getElementById('dive-map');
  if (!container) return;

  // Create map with dark theme
  const map = L.map('dive-map', {
    center: [20, 0],
    zoom: 2,
    minZoom: 2,
    maxZoom: 18,
    zoomControl: true,
    attributionControl: true
  });

  // Light map tiles (CartoDB Voyager - clean, modern style)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  // Calculate marker size based on dive count
  function getMarkerSize(dives) {
    const minSize = 8;
    const maxSize = 24;
    const minDives = 1;
    const maxDives = 28;
    const scale = (dives - minDives) / (maxDives - minDives);
    return minSize + (maxSize - minSize) * Math.sqrt(scale);
  }

  // Create markers
  const markers = [];
  diveSites.forEach(site => {
    const size = getMarkerSize(site.dives);

    // Create pulsing marker with glow effect
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

    const marker = L.marker([site.lat, site.lng], { icon: icon });

    // Popup content
    let popupContent = `
      <div class="dive-popup">
        <div class="dive-popup-name">${site.name}</div>
        <div class="dive-popup-count">${site.dives} dive${site.dives > 1 ? 's' : ''}</div>
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

  // Fit bounds to show all markers with padding
  if (markers.length > 0) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.15));
  }

  // Handle resize for responsive behavior
  function handleResize() {
    map.invalidateSize();
  }
  window.addEventListener('resize', handleResize);

  // Delay initial resize to ensure proper rendering
  setTimeout(handleResize, 100);
}

// Initialize map when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDiveMap);
} else {
  initDiveMap();
}
