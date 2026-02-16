---
title: "Photo Gallery"
layout: splash
permalink: /gallery/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/scuba/2025/raja/manta.jpg
excerpt: |
    Underwater photography from dive trips around the world

gallery_content:
  - excerpt: |
      <link rel="stylesheet" href="/assets/css/gallery.css" />

      <div class="gallery-stats">
        <div class="gallery-stat">
          <div class="gallery-stat-number" id="photo-count">97</div>
          <div class="gallery-stat-label">Photos</div>
        </div>
        <div class="gallery-stat">
          <div class="gallery-stat-number">8</div>
          <div class="gallery-stat-label">Trips</div>
        </div>
        <div class="gallery-stat">
          <div class="gallery-stat-number">6</div>
          <div class="gallery-stat-label">Countries</div>
        </div>
      </div>

      <div class="gallery-filters">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="2025">2025</button>
        <button class="filter-btn" data-filter="2024">2024</button>
        <button class="filter-btn" data-filter="2023">2023</button>
      </div>

      <div class="gallery-masonry" id="gallery-grid"></div>

      <div class="lightbox" id="lightbox">
        <span class="lightbox-close">&times;</span>
        <span class="lightbox-nav lightbox-prev" onclick="navigateLightbox(-1)">&#10094;</span>
        <div class="lightbox-content">
          <img id="lightbox-img" src="" alt="Full size photo">
        </div>
        <span class="lightbox-nav lightbox-next" onclick="navigateLightbox(1)">&#10095;</span>
        <div class="lightbox-caption" id="lightbox-caption"></div>
      </div>

      <script src="/assets/js/gallery.js"></script>
---

{% include feature_row id="gallery_content" type="center" %}
