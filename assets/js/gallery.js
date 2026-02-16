// Gallery photos data
const galleryPhotos = [
  // 2025 - Lembeh
  { src: "scuba/2025/lembeh/1090054.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1090137.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1090181.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1110244.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1110286.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1120505-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1130908-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1140988-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1141063-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1141073-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1141102-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1141120.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1141224-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1151396-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1151459.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1161497-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1161524-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1161746.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1161859-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },
  { src: "scuba/2025/lembeh/1161899-Edit.jpg", location: "Lembeh", year: "2025", trip: "lembeh" },

  // 2025 - Raja Ampat
  { src: "scuba/2025/raja/barracuda.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/clownfish2.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/clownfish3.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/coral_anenome.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/coral_fish.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/coral_fish2.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/coral_fish3.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/crocodile_dark.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/crocodile_light.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/cuttlefish.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/jellyfish.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/jellyfish2.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/manta.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/octopus.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/octopus2.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/scorpionfish.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/seahorse.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },
  { src: "scuba/2025/raja/shrimp.jpg", location: "Raja Ampat", year: "2025", trip: "raja" },

  // 2024 - Tubbataha
  { src: "scuba/2024/tubbataha/anenome_fish.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/barrel_sponge.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/bw_wreck.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/clownfish.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/eel_headon.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/eel_profile.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/octopus.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/puffer.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/pygmy_seahorse.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/reef.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/school_of_jack.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/soft_coral.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/spotted_eel.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/triggerfish.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/turtle_ground.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/turtle_shooting.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },
  { src: "scuba/2024/tubbataha/turtle_swim.jpg", location: "Tubbataha", year: "2024", trip: "tubbataha" },

  // 2024 - Australia
  { src: "scuba/2024/australia/anenome_fish.jpg", location: "Great Barrier Reef", year: "2024", trip: "australia" },
  { src: "scuba/2024/australia/bw_silhouette.jpg", location: "Great Barrier Reef", year: "2024", trip: "australia" },
  { src: "scuba/2024/australia/nudibranch.jpg", location: "Great Barrier Reef", year: "2024", trip: "australia" },
  { src: "scuba/2024/australia/orange_fish.jpg", location: "Great Barrier Reef", year: "2024", trip: "australia" },
  { src: "scuba/2024/australia/pink_mollusk.jpg", location: "Great Barrier Reef", year: "2024", trip: "australia" },
  { src: "scuba/2024/australia/purple_coral.jpg", location: "Great Barrier Reef", year: "2024", trip: "australia" },
  { src: "scuba/2024/australia/purple_mollusk.jpg", location: "Great Barrier Reef", year: "2024", trip: "australia" },
  { src: "scuba/2024/australia/silhouette.jpg", location: "Great Barrier Reef", year: "2024", trip: "australia" },
  { src: "scuba/2024/australia/soft_coral.jpg", location: "Great Barrier Reef", year: "2024", trip: "australia" },

  // 2023 - Cozumel
  { src: "scuba/2023/cozumel/boxfish.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/crab.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/cuda.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/eel.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/fish.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/lobster.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/nudibranchs.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/palancar_silhouette.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/seahorse.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/spider_crab.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/splendid_toadfish.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/stingray.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },
  { src: "scuba/2023/cozumel/turtle.jpg", location: "Cozumel", year: "2023", trip: "cozumel" },

  // 2023 - Islamorada
  { src: "scuba/2023/islamorada/crab.jpg", location: "Islamorada", year: "2023", trip: "islamorada" },
  { src: "scuba/2023/islamorada/eagle_coral.jpg", location: "Islamorada", year: "2023", trip: "islamorada" },
  { src: "scuba/2023/islamorada/eagle_tree.jpg", location: "Islamorada", year: "2023", trip: "islamorada" },
  { src: "scuba/2023/islamorada/fish.jpg", location: "Islamorada", year: "2023", trip: "islamorada" },
  { src: "scuba/2023/islamorada/moray.jpg", location: "Islamorada", year: "2023", trip: "islamorada" },
  { src: "scuba/2023/islamorada/spiny_puffer.jpg", location: "Islamorada", year: "2023", trip: "islamorada" },

  // 2023 - Coronado Islands
  { src: "scuba/2023/coronado_islands/garibaldi.png", location: "Coronado Islands", year: "2023", trip: "coronado" },
  { src: "scuba/2023/coronado_islands/shell.png", location: "Coronado Islands", year: "2023", trip: "coronado" },
  { src: "scuba/2023/coronado_islands/urchin.png", location: "Coronado Islands", year: "2023", trip: "coronado" },

  // 2023 - Philippines/Visayas
  { src: "scuba/2023/philippines/clownfish.jpg", location: "Visayas", year: "2023", trip: "philippines" }
];

let currentFilter = 'all';
let currentIndex = 0;
let filteredPhotos = [...galleryPhotos];

function initGallery() {
  renderGallery();
  setupLightbox();
  setupFilters();
}

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  // Apply filter
  filteredPhotos = currentFilter === 'all'
    ? [...galleryPhotos]
    : galleryPhotos.filter(p => p.year === currentFilter);

  // Shuffle for visual variety (optional - remove if you want chronological)
  // filteredPhotos.sort(() => Math.random() - 0.5);

  container.innerHTML = filteredPhotos.map((photo, index) => `
    <div class="gallery-item" data-index="${index}" onclick="openLightbox(${index})">
      <img src="/assets/thumbs/${photo.src}" alt="${photo.location}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="gallery-item-location">${photo.location}</div>
        <div class="gallery-item-year">${photo.year}</div>
      </div>
    </div>
  `).join('');

  // Update count
  const countEl = document.getElementById('photo-count');
  if (countEl) {
    countEl.textContent = filteredPhotos.length;
  }
}

function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderGallery();
    });
  });
}

function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  // Touch swipe support
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });
  lightbox.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      navigateLightbox(diff > 0 ? 1 : -1);
    }
  });
}

function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  const photo = filteredPhotos[index];
  img.src = `/assets/images/${photo.src}`;
  caption.textContent = `${photo.location} (${photo.year})`;

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = filteredPhotos.length - 1;
  if (currentIndex >= filteredPhotos.length) currentIndex = 0;

  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const photo = filteredPhotos[currentIndex];

  img.src = `/assets/images/${photo.src}`;
  caption.textContent = `${photo.location} (${photo.year})`;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGallery);
} else {
  initGallery();
}
