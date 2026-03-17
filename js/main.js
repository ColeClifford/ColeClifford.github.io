// ===== Data =====
// Edit these arrays to update your portfolio content.

const projects = [
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
    title: "Cards by Cole",
    description: "A completely offline, device-to-device card game.",
    tags: ["Swift", "iOS"],
    links: {
      arxiv: "https://arxiv.org/abs/2106.04283",
      project: "https://next-week-tonight.github.io/NWT/",
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
document.getElementById("year").textContent = new Date().getFullYear();

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
