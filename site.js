const config = window.CAPS_CONFIG;

const navItems = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "Diensten", href: "diensten.html", page: "diensten" },
  { label: "Projecten", href: "projecten.html", page: "projecten" },
  { label: "Over", href: "over.html", page: "over" },
  { label: "Contact", href: "contact.html", page: "contact" }
];

const headerTemplate = (activePage) => `
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-caps-steel">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <a href="index.html" class="flex items-center gap-3 group" aria-label="${config.company.name} home">
          <div class="w-10 h-10 rounded-xl bg-caps-blue text-white flex items-center justify-center font-bold tracking-tight shadow-soft">
            CC
          </div>
          <div>
            <p class="text-caps-blue font-extrabold text-base md:text-lg leading-tight">${config.company.name}</p>
            <p class="text-xs md:text-sm uppercase tracking-[0.2em] text-caps-orange font-semibold">Marine Consulting</p>
          </div>
        </a>
        <nav class="hidden md:flex items-center gap-8" aria-label="Primaire">
          ${navItems
            .map(
              (item) => `
              <a href="${item.href}" class="text-sm font-semibold tracking-wide transition ${
                activePage === item.page
                  ? "text-caps-blue"
                  : "text-slate-600 hover:text-caps-blue"
              }">
                ${item.label}
              </a>
            `
            )
            .join("")}
          <a href="${config.contact.ctaLink}" class="bg-caps-orange text-white px-5 py-2.5 rounded-full font-semibold shadow-soft hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-caps-orange">
            ${config.contact.primaryCta}
          </a>
        </nav>
        <button class="md:hidden p-2 text-caps-blue" id="mobile-menu-button" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden border-t border-caps-steel bg-white shadow-soft">
      <div class="px-4 py-4 space-y-2">
        ${navItems
          .map(
            (item) => `
            <a href="${item.href}" class="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50">
              ${item.label}
            </a>
          `
          )
          .join("")}
        <a href="${config.contact.ctaLink}" class="block text-center px-4 py-3 rounded-xl font-semibold text-white bg-caps-orange shadow-soft">
          ${config.contact.primaryCta}
        </a>
      </div>
    </div>
  </header>
`;

const footerTemplate = `
  <footer class="bg-caps-night text-white pt-12 pb-10 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-4">
        <div>
          <p class="text-lg font-semibold">${config.company.name}</p>
          <p class="text-sm text-white/70 mt-2">${config.company.tagline}</p>
        </div>
        <div>
          <p class="text-sm uppercase tracking-[0.2em] text-white/50">Navigatie</p>
          <ul class="mt-4 space-y-2">
            ${navItems
              .map(
                (item) => `
                <li><a href="${item.href}" class="text-sm text-white/70 hover:text-white">${item.label}</a></li>
              `
              )
              .join("")}
          </ul>
        </div>
        <div>
          <p class="text-sm uppercase tracking-[0.2em] text-white/50">Contact</p>
          <ul class="mt-4 space-y-2 text-sm text-white/70">
            <li>${config.company.address}</li>
            <li>${config.company.postalCode} ${config.company.city}</li>
            <li><a href="mailto:${config.company.email}" class="hover:text-white">${config.company.email}</a></li>
            <li><a href="tel:${config.company.phone}" class="hover:text-white">${config.company.phone}</a></li>
            <li><a href="${config.company.linkedin}" class="hover:text-white" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <p class="text-sm uppercase tracking-[0.2em] text-white/50">Bedrijfsinfo</p>
          <ul class="mt-4 space-y-2 text-sm text-white/70">
            <li>KvK: ${config.company.kvk}</li>
            <li>BTW: ${config.company.vat}</li>
            <li>${config.company.legalName}</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/10 mt-10 pt-6 text-xs text-white/50 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p>&copy; ${new Date().getFullYear()} ${config.company.name}. Alle rechten voorbehouden.</p>
        <p>Premium maritime engineering consultancy.</p>
      </div>
    </div>
  </footer>
`;

const ctaBandTemplate = `
  <div class="bg-caps-blue text-white rounded-3xl px-6 py-10 md:px-10 md:py-12 shadow-lift">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-white/70">Strategisch advies</p>
        <h3 class="text-2xl md:text-3xl font-semibold mt-2">Plan een kennismaking voor uw volgende refit of nieuwbouw.</h3>
      </div>
      <a href="${config.contact.ctaLink}" class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-caps-orange text-white font-semibold shadow-soft hover:bg-orange-600">
        ${config.contact.primaryCta}
        <i class="fa-solid fa-arrow-right ml-2"></i>
      </a>
    </div>
  </div>
`;

const injectPartials = () => {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const cta = document.querySelector("[data-cta-band]");
  const activePage = document.body.dataset.page;

  if (header) {
    header.innerHTML = headerTemplate(activePage);
  }

  if (footer) {
    footer.innerHTML = footerTemplate;
  }

  if (cta) {
    cta.innerHTML = ctaBandTemplate;
  }
};

const setupMobileMenu = () => {
  const button = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  if (!button || !menu) return;

  const toggle = () => {
    const isOpen = menu.classList.toggle("hidden");
    button.setAttribute("aria-expanded", String(!isOpen));
  };

  button.addEventListener("click", toggle);
};

const insertOrganizationSchema = () => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: config.company.name,
      legalName: config.company.legalName,
      url: config.company.website,
      email: config.company.email,
      telephone: config.company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: config.company.address,
        postalCode: config.company.postalCode,
        addressLocality: config.company.city,
        addressCountry: config.company.country
      },
      sameAs: [config.company.linkedin]
    },
    null,
    2
  );
  document.head.appendChild(script);
};

document.addEventListener("DOMContentLoaded", () => {
  injectPartials();
  setupMobileMenu();
  populateConfigFields();
  insertOrganizationSchema();
});

function populateConfigFields() {
  const elements = document.querySelectorAll("[data-config]");
  elements.forEach((element) => {
    const path = element.dataset.config;
    const value = path.split(".").reduce((acc, key) => acc?.[key], config);
    if (!value) return;

    if (element.dataset.configHref) {
      if (element.dataset.configHref === "link") {
        element.setAttribute("href", value);
      } else {
        element.setAttribute("href", `${element.dataset.configHref}:${value}`);
      }
    }
    element.textContent = value;
  });
}
