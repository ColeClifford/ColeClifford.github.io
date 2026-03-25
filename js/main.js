// ===== Data =====
// Edit these arrays to update your portfolio content.

const projects = [
  {
    title: "Pickford",
    description:
      "AI-powered storytelling platform exploring the future of interactive narratives.",
    tags: ["Storytelling", "Deep Learning"],
    links: {
      site: "https://pickford.ai/",
      product: "https://crowd.pickford.ai/",
    },
  },
  {
    title: "AOUSD",
    description:
      "Contributing to the open standard for 3D content creation and interchange.",
    tags: ["3D", "Open Source"],
    links: {
      site: "https://aousd.org/",
    },
  },
  {
    title: "Director Style Sheets",
    description: "A declarative language for directing AI-generated content.",
    tags: ["Storytelling", "Open Source"],
    links: {
      slides:
        "https://drive.google.com/file/d/1bnDxDqSc0RyWADfBRrLdVK5u3tQvlXV3/view",
    },
  },
  {
    title: "Atlas",
    description: "Open-source ML experiment management and tracking platform.",
    tags: ["Python", "Deep Learning", "Open Source"],
    links: {
      producthunt:
        "https://www.producthunt.com/products/foundations-atlas?launch=foundations-atlas",
      github: "https://github.com/dessa-oss/atlas",
    },
  },
  {
    title: "Orbit",
    description: "ML model deployment and serving infrastructure.",
    tags: ["Python", "Deep Learning"],
    links: {},
  },
  {
    title: "Space2Vec",
    description: "Using CNNs to find Type Ia Supernovae for SETI.",
    tags: ["Space", "Python", "Deep Learning"],
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
    description:
      "A unique embedding technique for multi-model relational learning.",
    tags: ["Python", "Deep Learning"],
    links: {},
  },
  {
    title: "Cards by Cole",
    description: "A completely offline, device-to-device card game.",
    tags: ["Swift", "iOS"],
    links: {
      app: "https://apps.apple.com/ca/app/cards-by-cole/id6760673491",
    },
  },
  {
    title: "Solon",
    description: "A blockchain-based voting system.",
    tags: ["Python", "Blockchain", "Open Source"],
    links: {
      github: "https://github.com/ColeClifford/Solon/tree/mvp",
    },
  },
  {
    title: "SETI FDL",
    description: "A research lab for SETI.",
    tags: ["Space", "Deep Learning"],
    links: {
      site: "https://fdl.ai/",
    },
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
  {
    type: "news",
    title: "SAG Framework for AI Voice Actor Casting",
    date: "2025-09-12",
    description:
      "Pickford partners with SAG-AFTRA on a framework for ethical AI voice actor casting.",
    url: "https://variety.com/2025/digital/news/sag-framework-pickford-ai-whispers-voice-actor-casting-1236515884/",
  },
  {
    type: "news",
    title: "Hollywood Tomorrow: AI Studios & Storytelling",
    date: "2025-08-07",
    description:
      "Featured in the LA Times on the future of AI-driven storytelling in Hollywood.",
    url: "https://www.latimes.com/entertainment-arts/movies/story/2025-08-07/hollywood-tomorrow-ai-studios-storytelling-luma-asteria",
  },
  {
    type: "news",
    title: "Pickford x ElevenLabs Partnership",
    date: "2025-10-08",
    description:
      "Pickford partners with ElevenLabs for next-generation voice synthesis in interactive narratives.",
    url: "https://elevenlabs.io/blog/pickford",
  },
  {
    type: "news",
    title: "Variety: Bernie Su & Pickford AI's Whispers",
    date: "2025-05-14",
    description:
      "Variety covers the collaboration between Bernie Su and Pickford AI on Whispers.",
    url: "https://variety.com/2025/digital/global/bernie-su-whispers-pickford-ai-1236397107/",
  },
  {
    type: "news",
    title: "Busan Film Festival Vision Section",
    date: "2025-04-19",
    description:
      "Pickford selected for Busan International Film Festival's innovation platform.",
    url: "https://variety.com/2025/film/news/busan-film-fest-vision-section-innovation-platform-1236492552/",
  },
  {
    type: "podcast",
    title: "Founders Quest: Building Pickford AI",
    date: "2025-02-20",
    description:
      "Podcast episode discussing the journey of building Pickford AI from the ground up.",
    url: "https://foundersquest.podbean.com/e/ep-15-cole-clifford-pickford-ai/",
  },
  {
    type: "medium",
    title: "If You Scream at the TV, the TV Might Scream Back",
    date: "2025-01-24",
    description:
      "Exploring the future of interactive, responsive media experiences.",
    url: "https://medium.com/pickford-ai/if-you-scream-at-the-tv-the-tv-might-scream-back-0d515d20fa96",
  },
  {
    type: "medium",
    title: "Pickford Dev Blog 004",
    date: "2024-11-19",
    description: "Latest engineering updates from the Pickford team.",
    url: "https://medium.com/pickford-ai/pickford-dev-blog-004-f8727b00b3ad",
  },
  {
    type: "medium",
    title: "Pickford Dev Blog 003",
    date: "2024-08-16",
    description: "Deep dive into the technical architecture powering Pickford.",
    url: "https://medium.com/pickford-ai/pickford-dev-blog-003-2d421151e515",
  },
  {
    type: "medium",
    title: "Pickford Dev Blog 002",
    date: "2024-07-29",
    description: "Engineering progress on Pickford's AI narrative engine.",
    url: "https://medium.com/pickford-ai/pickford-dev-blog-002-2614305eab30",
  },
  {
    type: "medium",
    title: "Pickford Dev Blog 001",
    date: "2024-07-12",
    description: "Kicking off the Pickford dev blog series.",
    url: "https://medium.com/pickford-ai/pickford-dev-blog-001-ad376f3cbc8c",
  },
  {
    type: "medium",
    title: "Pickford Dev Blog: Introducing Pickford",
    date: "2024-06-28",
    description: "Announcing Pickford and our vision for AI storytelling.",
    url: "https://medium.com/pickford-ai/pickford-dev-blog-252f2d59628c",
  },
  {
    type: "talk",
    title: "Cash App: Production ML Pipelines with Prefect",
    date: "2022-11-10",
    description:
      "Talk on building production ML and data pipelines at Cash App using Prefect.",
    url: "https://www.eventbrite.com/e/cash-app-production-ml-and-data-pipelines-using-prefect-tickets-449491650627",
  },
  {
    type: "medium",
    title: "Applied Deep Learning at U of T",
    date: "2019-04-26",
    description:
      "Guest lecture introducing applied deep learning at the University of Toronto.",
    url: "https://medium.com/dessa-news/introducing-applied-deep-learning-at-uoft-3c72ffd99e87",
  },
  {
    type: "talk",
    title: "PyCon Canada 2018",
    date: "2018-11-11",
    description: "Conference talk at PyCon Canada.",
    url: "https://2018.pycon.ca/talks/talk-PC-55535/",
  },
  {
    type: "medium",
    title: "Space 2 Vec",
    date: "2019-01-18",
    description:
      "Using deep learning to identify supernovae in astronomical data.",
    url: "https://medium.com/dessa-news/space-2-vec-fd900f5566",
  },
  {
    type: "news",
    title: "Canada's AI Moment",
    date: "2017-11-17",
    description:
      "Financial Post op-ed on what Canada needs to do to secure its position in AI.",
    url: "https://financialpost.com/entrepreneur/lets-not-miss-our-chance-what-canada-needs-to-do-to-secure-its-ai-moment",
  },
  {
    type: "video",
    title: "Reinventing Storytelling with Bing Gordon and Stephen Piron",
    date: "2025-12-16",
    description:
      "A conversation on Pickford's new kind of storytelling between a verteren powerhouse, Bing, and Pickford's co-founder, Stephen.",
    url: "https://www.youtube.com/watch?v=kNMi_tTkka8",
  },
  {
    type: "news",
    title:
      "Hollywood’s Real AI Future May Have Little to Do with What’s on the Big Screen",
    date: "2026-02-01",
    description:
      "A panel discussion on the future of AI in Hollywood at IndieWire Studio.",
    url: "https://www.indiewire.com/news/events/can-ai-solve-hollywood-biggest-problems-sundance-panel-1235177211/",
  },
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
  projects.forEach((project, i) => {
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

    card.style.animationDelay = `${i * 0.07}s`;
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

  timeline.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "timeline__item";
    el.innerHTML = `
      <div class="timeline__dot"></div>
      <div class="timeline__date">${item.date}</div>
      <div class="timeline__role">${item.role}</div>
      <div class="timeline__org">${item.org}</div>
      <p class="timeline__desc">${item.description}</p>
    `;
    el.style.animationDelay = `${i * 0.08}s`;
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
