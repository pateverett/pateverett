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

dive_map:
  - excerpt: |
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="" />
      <link rel="stylesheet" href="/assets/css/dive-map.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
      <div class="dive-map-container">
        <h2 class="dive-map-title">Where I've Been Diving</h2>
        <p class="dive-map-subtitle">Tap a marker to see details</p>
        <div id="dive-map"></div>
      </div>
      <script src="/assets/js/dive-map.js"></script>
row-1:
  - image_path: /assets/landing/scuba/lembeh_nudi.jpg
    url: /scuba/2025/lembeh
    alt: Lembeh (Indonesia)
    title: Lembeh (Indonesia)
    excerpt: Lembeh (2025)
  - image_path: /assets/landing/scuba/raja_scorpionfish.jpg
    url: /scuba/2025/raja
    alt: Raja Ampat (Indonesia)
    title: Raja Ampat (Indonesia)
    excerpt: Raja Ampat (2025)
  - image_path: /assets/landing/scuba/tubbataha_octopus.jpg
    url: /scuba/2024/tubbataha
    alt: Tubbataha Reef (Philippines)
    title: Tubbataha Reef (Philippines)
    excerpt: Tubbataha Reef (2024)
row-2:
  - image_path: /assets/landing/scuba/cozumel_eel.jpg
    url: /scuba/2023/cozumel
    alt: Cozumel (Mexico)
    title: Cozumel (Mexico)
    excerpt: Cozumel, Mexico (2023)
  - image_path: /assets/landing/scuba/visayas_clownfish.jpg
    url: /scuba/2023/philippines
    alt: Visayas (Philippines)
    title: Visayas (Philippines)
    excerpt: Infiniti Liveaboard (2023)
  - image_path: /assets/landing/scuba/islamorada_crab.jpg
    url: /scuba/2023/islamorada
    alt: Islamorada (Florida)
    title: Islamorada (Florida)
    excerpt: Islamorada, Florida (2023)
---

{% include feature_row id="intro" type="center" %}

{% include feature_row id="dive_map" type="center" %}

{% include feature_row_noLM id="row-1" %}

{% include feature_row_noLM id="row-2" %}
