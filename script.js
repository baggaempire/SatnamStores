const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navCta = document.querySelector(".nav-cta");
const siteHeader = document.querySelector(".site-header");
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-media, .category-column, .feature-card, .story-card, .gallery-card, .visit-strip"
);

if (menuToggle && mainNav && navCta) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
    navCta.classList.toggle("is-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
      navCta.classList.remove("is-open");
    });
  });
}

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    event.preventDefault();
    const headerOffset = siteHeader ? siteHeader.offsetHeight + 12 : 0;
    const y = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealTargets.forEach((target) => {
  target.classList.add("reveal-on-scroll");
  revealObserver.observe(target);
});

const syncHeaderShadow = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 14);
};

window.addEventListener("scroll", syncHeaderShadow, { passive: true });
syncHeaderShadow();
