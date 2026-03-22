// ===== Data =====
// Edit these arrays to update your portfolio content.

const projects = [
  {
    title: "Pickford",
    description: "",
    tags: [],
    links: {},
  },
  {
    title: "OpenUSD",
    description: "",
    tags: [],
    links: {},
  },
  {
    title: "Director Style Sheets",
    description: "",
    tags: [],
    links: {},
  },
  {
    title: "Atlas",
    description: "",
    tags: [],
    links: {},
  },
  {
    title: "Orbit",
    description: "",
    tags: [],
    links: {},
  },
  {
    title: "Space2Vec",
    description: "Using CNN's to find Type Ia Supernovae.",
    tags: ["Python", "Deep Learning"],
    links: {
      medium: "https://medium.com/dessa-news/space-2-vec-fd900f5566",
      betakit:
        "https://betakit.com/dessa-engineers-build-machine-learning-supernova-identification-system/",
      github: "https://github.com/pippinlee/space2vec-ml-code",
    },
  },
  {
    title: "Memcodes",
    description: "A novel approach to creating discrete embeddings.",
    tags: ["Python", "Deep Learning"],
    links: {
      arxiv: "https://arxiv.org/abs/2106.04283",
      project: "https://next-week-tonight.github.io/NWT/",
    },
  },
  {
    title: "Pavlov",
    description: "",
    tags: [],
    links: {},
  },
  {
    title: "Cards by Cole",
    description: "A completely offline, device-to-device card game.",
    tags: ["Swift", "iOS"],
    links: {},
  },
  {
    title: "Solon",
    description: "",
    tags: [],
    links: {},
  },
];

const timeline = [
  {
    date: "Mar 2024 — Present",
    role: "Co-Founder",
    org: "Pickford",
    description: "Exploring the future of storytelling.",
  },
  {
    date: "Feb 2020 — Mar 2024",
    role: "Senior Machine Learning Engineer",
    org: "Block",
    description:
      "Building risk models for fiat and crypto payments and the infrastructure to support them.",
  },
  {
    date: "May 2016 — Feb 2020",
    role: "Machine Learning Engineer",
    org: "Dessa",
    description:
      "Building complex deeplearning infrastructure and models for a variety of use cases.",
  },
  // Add more entries here
];

const feed = [
  // Add more feed items here:
  // {
  //   type: "linkedin",
  //   title: "Post Title",
  //   date: "2026-01-01",
  //   description: "Short summary.",
  //   url: "https://linkedin.com/...",
  // },
];

// Sort feed by date descending
feed.sort((a, b) => new Date(b.date) - new Date(a.date));

// ===== Theme Toggle =====
(function initTheme() {
  const toggle = document.querySelector(".theme-toggle");
  const sunIcon = toggle.querySelector(".icon-sun");
  const moonIcon = toggle.querySelector(".icon-moon");

  function applyIconState() {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    sunIcon.style.display = isDark ? "none" : "block";
    moonIcon.style.display = isDark ? "block" : "none";
  }

  applyIconState();

  toggle.addEventListener("click", function () {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    applyIconState();
  });
})();

// ===== Render Projects =====
(function renderProjects() {
  const grid = document.getElementById("projects-grid");
  const filterBar = document.getElementById("filter-bar");
  if (!grid || !filterBar) return;

  // Collect all unique tags
  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();

  // Render filter buttons
  const allBtn = document.createElement("button");
  allBtn.className = "filter-btn active";
  allBtn.textContent = "All";
  allBtn.dataset.tag = "all";
  filterBar.appendChild(allBtn);

  allTags.forEach((tag) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.textContent = tag;
    btn.dataset.tag = tag;
    filterBar.appendChild(btn);
  });

  // Render project cards
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.tags = project.tags.join(",");

    const linksHtml = Object.entries(project.links)
      .map(([label, url]) => {
        const displayLabel = label.charAt(0).toUpperCase() + label.slice(1);
        const isExternal = url.startsWith("http")
          ? ' target="_blank" rel="noopener"'
          : "";
        return `<a href="${url}"${isExternal}>${displayLabel}</a>`;
      })
      .join("");

    card.innerHTML = `
      <h3 class="project-card__title">${project.title}</h3>
      <p class="project-card__desc">${project.description}</p>
      <div class="project-card__tags">
        ${project.tags.map((t) => `<span class="project-card__tag">${t}</span>`).join("")}
      </div>
      <div class="project-card__links">${linksHtml}</div>
    `;

    grid.appendChild(card);
  });

  // Filter logic
  filterBar.addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterBar
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const tag = btn.dataset.tag;
    grid.querySelectorAll(".project-card").forEach((card) => {
      if (tag === "all" || card.dataset.tags.split(",").includes(tag)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
})();

// ===== Render Timeline =====
(function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container) return;

  timeline.forEach((item) => {
    const el = document.createElement("div");
    el.className = "timeline__item";
    el.innerHTML = `
      <div class="timeline__dot"></div>
      <div class="timeline__date">${item.date}</div>
      <div class="timeline__role">${item.role}</div>
      <div class="timeline__org">${item.org}</div>
      <p class="timeline__desc">${item.description}</p>
    `;
    container.appendChild(el);
  });
})();

// ===== Footer Year =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Scroll Fade-in =====
(function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
})();

// ===== Feed Helpers =====
function formatFeedDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function createFeedItemEl(item, index) {
  const el = document.createElement("div");
  el.className = "feed-item";
  el.dataset.type = item.type;

  const isExternal = item.url;
  const titleHtml = isExternal
    ? `<a href="${item.url}" target="_blank" rel="noopener">${item.title}</a>`
    : `<span>${item.title}</span>`;

  let actionHtml = "";
  if (isExternal) {
    actionHtml = `<a href="${item.url}" target="_blank" rel="noopener" style="font-size:0.85rem;font-weight:500;">Read &rarr;</a>`;
  } else if (item.html) {
    actionHtml = `<button class="feed-item__read-toggle" data-index="${index}">Read &darr;</button>`;
  }

  el.innerHTML = `
    <div class="feed-item__header">
      <span class="feed-item__type feed-item__type--${item.type}">${item.type}</span>
      <span class="feed-item__date">${formatFeedDate(item.date)}</span>
    </div>
    <div class="feed-item__title">${titleHtml}</div>
    <p class="feed-item__desc">${item.description}</p>
    ${actionHtml}
    ${item.html ? `<div class="feed-item__body" id="feed-body-${index}">${item.html}</div>` : ""}
  `;

  return el;
}

// ===== Feed Preview (Homepage) =====
(function renderFeedPreview() {
  const container = document.getElementById("feed-preview");
  if (!container) return;

  const previewItems = feed.slice(0, 3);
  const list = document.createElement("div");
  list.className = "feed-list";

  previewItems.forEach((item, i) => {
    list.appendChild(createFeedItemEl(item, i));
  });

  container.appendChild(list);

  // Handle read toggles for post types
  container.addEventListener("click", function (e) {
    const btn = e.target.closest(".feed-item__read-toggle");
    if (!btn) return;
    const body = document.getElementById("feed-body-" + btn.dataset.index);
    if (body) {
      body.classList.toggle("open");
      btn.innerHTML = body.classList.contains("open")
        ? "Close &uarr;"
        : "Read &darr;";
    }
  });
})();

// ===== Feed Page (Full) =====
(function renderFeedPage() {
  const grid = document.getElementById("feed-grid");
  const filterBar = document.getElementById("feed-filter-bar");
  if (!grid || !filterBar) return;

  // Collect unique types
  const allTypes = [...new Set(feed.map((item) => item.type))].sort();

  // Render filter buttons
  const allBtn = document.createElement("button");
  allBtn.className = "filter-btn active";
  allBtn.textContent = "All";
  allBtn.dataset.type = "all";
  filterBar.appendChild(allBtn);

  allTypes.forEach((type) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    btn.dataset.type = type;
    filterBar.appendChild(btn);
  });

  // Render all feed items
  const list = document.createElement("div");
  list.className = "feed-list";

  feed.forEach((item, i) => {
    list.appendChild(createFeedItemEl(item, i));
  });

  grid.appendChild(list);

  // Filter logic
  filterBar.addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterBar
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const type = btn.dataset.type;
    list.querySelectorAll(".feed-item").forEach((item) => {
      if (type === "all" || item.dataset.type === type) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });

  // Handle read toggles
  grid.addEventListener("click", function (e) {
    const btn = e.target.closest(".feed-item__read-toggle");
    if (!btn) return;
    const body = document.getElementById("feed-body-" + btn.dataset.index);
    if (body) {
      body.classList.toggle("open");
      btn.innerHTML = body.classList.contains("open")
        ? "Close &uarr;"
        : "Read &darr;";
    }
  });
})();

// ===== Mobile Nav Toggle =====
(function initMobileNav() {
  const hamburger = document.querySelector(".nav__hamburger");
  const links = document.querySelector(".nav__links");

  hamburger.addEventListener("click", function () {
    links.classList.toggle("open");
  });

  // Close menu when a link is clicked
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      links.classList.remove("open");
    });
  });
})();
