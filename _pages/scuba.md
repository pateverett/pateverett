---
title: "SCUBA"
layout: splash
permalink: /scuba/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/scuba/molokini.jpg
  actions:
excerpt: |
    "The best way to observe a fish is to become a fish."


    -Jacques Cousteau
intro:
  - excerpt: "I learned to dive in 2017, and I've enjoyed the challenge of growing as a diver and underwater photographer since then. I have a long bucket list of diving destinations still to explore. Some of my favorite SCUBA experiences are below."
---

{% include feature_row id="intro" type="center" %}

<script>
const diveSiteData = [
{% for row in site.data.dive_sites %}{% assign lat = row.lat | plus: 0.0 %}{% assign lng = row.lng | plus: 0.0 %}{% if lat != 0 and lng != 0 %}
  { country: {{ row.country | jsonify }}, lat: {{ row.lat }}, lng: {{ row.lng }}, location: {{ row.location | jsonify }}, site: {{ row.site_name | jsonify }} },
{% endif %}{% endfor %}
];

const diveTripLinks = {
{% assign trip_pages = site.pages | where: "scuba_trip", true %}{% for tp in trip_pages %}{% if tp.dive_locations %}{% for loc in tp.dive_locations %}  {{ loc | jsonify }}: {{ tp.url | jsonify }},
{% endfor %}{% endif %}{% endfor %}
};
</script>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="" />
<link rel="stylesheet" href="/assets/css/dive-map.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
<div class="dive-map-container">
  <h2 class="dive-map-title">Where I've Been Diving</h2>
  <p class="dive-map-subtitle">Tap a marker to see details</p>
  <div id="dive-map"></div>
</div>
<script src="/assets/js/dive-map.js"></script>

<div class="feature__wrapper_noLM">
{% assign scuba_trips = site.pages | where: "scuba_trip", true | sort: "date" | reverse %}
{% for trip in scuba_trips %}
  <div class="feature__item">
    <div class="archive__item">
      {% if trip.card_image %}
      <div class="archive__item-teaser">
        <a href="{{ trip.url | relative_url }}">
          <img src="{{ trip.card_image | relative_url }}" alt="{{ trip.card_title | default: trip.title }}">
        </a>
      </div>
      {% endif %}
      <div class="archive__item-body">
        <a href="{{ trip.url | relative_url }}">
          <h2 class="archive__item-title">{{ trip.card_title | default: trip.title }}</h2>
        </a>
      </div>
    </div>
  </div>
{% endfor %}
</div>
