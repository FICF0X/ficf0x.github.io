// i18n.js — bilingual toggle (ES/EN) for the personal portfolio.
// Spanish is the default; English serves international recruiters.
// Choice persists in localStorage.

const I18N = {
  es: {
    "nav.about": "Sobre mí", "nav.skills": "Skills", "nav.projects": "Proyectos",
    "nav.experience": "Experiencia", "nav.contact": "Contacto",

    "hero.eyebrow": "📍 San Miguel, Lima · Perú 🇵🇪",
    "hero.role": "Desarrollador de Software Junior · Analista de QA",
    "hero.lead": "Desarrollo web y móvil con foco en calidad. Construyo software y, además, me aseguro de que funcione — automatizando las pruebas que lo respaldan.",
    "hero.cta1": "Contáctame",
    "hero.meta.work": "💼 Desarrollador en LCT Global",
    "hero.meta.lang": "🗣️ Inglés B2",

    "about.kicker": "Sobre mí",
    "about.title": "Dev y QA en una sola persona",
    "about.p1": "Egresado de Computación e Informática (Cibertec) con especialización en desarrollo de software web y móvil. Tengo experiencia práctica en Front-end (JS/HTML/CSS) y aplicaciones iOS (Swift), complementada con sólidos conocimientos en automatización de pruebas usando Selenium y Cucumber.",
    "about.p2": "Me gusta entender cómo funcionan las herramientas por dentro — por eso construyo cosas desde cero en vez de solo consumir frameworks. Busco integrarme a un equipo donde pueda aportar tanto en el desarrollo como en la calidad del software.",

    "skills.kicker": "Stack",
    "skills.title": "Habilidades técnicas",
    "skills.languages": "Lenguajes",
    "skills.webmobile": "Web & Mobile",
    "skills.webservices": "Web Services",
    "skills.qa": "QA & Testing",
    "skills.databases": "Bases de datos",

    "projects.kicker": "Trabajo",
    "projects.title": "Proyectos",
    "projects.comercial.badge": "Destacado",
    "projects.comercial.desc": "Sistema comercial full-stack con el flujo completo de inventario: compras, ingreso de mercadería, facturación (IGV) y despacho. Control de stock en tiempo real, operaciones atómicas vía RPC de Postgres y seguridad por capas (RLS). Acceso demo: admin@gmail.com / admin123.",
    "projects.fdt.badge": "Destacado",
    "projects.fdt.desc": "Un test-runner sin dependencias que construí desde cero para entender cómo funcionan Jest y Vitest por dentro. Incluye CLI propia, métricas y un sitio de documentación con internacionalización ES/EN hecha a mano.",
    "projects.demo": "Demo en vivo ↗",
    "projects.qa.desc": "Suite de pruebas automatizadas E2E para saucedemo.com con Selenium, Cucumber (BDD en español) y el patrón Page Object. Esperas explícitas, captura de pantalla al fallar y Maven Wrapper.",
    "projects.kylo.desc": "App iOS para alquiler de vehículos desarrollada en Swift, optimizando la experiencia en dispositivos Apple. Implementé el framework de pruebas automatizadas con Java, Selenium y Cucumber, reduciendo errores críticos antes del despliegue.",
    "projects.markham.desc": "Formé parte del equipo que maquetó y desarrolló la interfaz web del Colegio Markham, con un diseño responsivo y funcional bajo estándares modernos de Front-end. Práctica en EBP Consulting.",
    "projects.markham.tag": "Responsive",

    "exp.kicker": "Trayectoria",
    "exp.title": "Experiencia",
    "exp.lct.role": "Desarrollador de Software",
    "exp.lct.date": "Junio 2026 – Presente",
    "exp.lct.l1": "Desarrollo de software en una empresa de TI especializada en soluciones a medida para web, móvil y escritorio.",
    "exp.kylo.role": "Desarrollador de Software Móvil & QA",
    "exp.kylo.l1": "Desarrollé una app iOS de alquiler de vehículos en Swift, optimizando la experiencia de usuario en dispositivos Apple.",
    "exp.kylo.l2": "Implementé el framework de pruebas automatizadas con Java, Selenium y Cucumber, reduciendo errores críticos antes del despliegue.",
    "exp.ebp.role": "Practicante de Desarrollo Web (Front-end)",
    "exp.ebp.l1": "Formé parte del equipo que maquetó y desarrolló la web del Colegio Markham, con diseño responsivo y funcional.",
    "exp.ebp.l2": "Colaboré en diversos proyectos corporativos bajo estándares modernos de Front-end.",
    "exp.other.role": "Otra experiencia profesional",
    "exp.other.l1": "Asistente Logístico en APEC (Nov 2024): gestión de protocolos internacionales y asistencia a dignatarios.",
    "exp.other.l2": "Ventas y anfitrionaje: atención al cliente y resolución de conflictos en eventos masivos.",

    "edu.kicker": "Formación",
    "edu.title": "Educación e idiomas",
    "edu.degree": "Profesional Técnico en Computación e Informática",
    "edu.lang": "Inglés — Nivel B2",
    "edu.lang.sub": "Intermedio-Avanzado",

    "contact.kicker": "Contacto",
    "contact.title": "¿Trabajamos juntos?",
    "contact.lead": "Siempre abierto a colaborar, aprender y sumar a buenos equipos. Si quieres hablar de un proyecto o una oportunidad, escríbeme.",

    "footer.built": "Hecho a mano con HTML & CSS",
  },

  en: {
    "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
    "nav.experience": "Experience", "nav.contact": "Contact",

    "hero.eyebrow": "📍 San Miguel, Lima · Peru 🇵🇪",
    "hero.role": "Junior Software Developer · QA Analyst",
    "hero.lead": "Web and mobile development with a focus on quality. I build software — and I make sure it works, by automating the tests that back it up.",
    "hero.cta1": "Get in touch",
    "hero.meta.work": "💼 Developer at LCT Global",
    "hero.meta.lang": "🗣️ English B2",

    "about.kicker": "About me",
    "about.title": "Developer and QA in one person",
    "about.p1": "Computing & IT graduate (Cibertec) specialized in web and mobile software development. I have hands-on experience in Front-end (JS/HTML/CSS) and iOS apps (Swift), backed by solid knowledge of test automation using Selenium and Cucumber.",
    "about.p2": "I like to understand how tools work under the hood — which is why I build things from scratch instead of just consuming frameworks. I'm looking to join a team where I can contribute to both development and software quality.",

    "skills.kicker": "Stack",
    "skills.title": "Technical skills",
    "skills.languages": "Languages",
    "skills.webmobile": "Web & Mobile",
    "skills.webservices": "Web Services",
    "skills.qa": "QA & Testing",
    "skills.databases": "Databases",

    "projects.kicker": "Work",
    "projects.title": "Projects",
    "projects.comercial.badge": "Featured",
    "projects.comercial.desc": "Full-stack commercial system covering the complete inventory flow: purchasing, goods receipt, invoicing (VAT) and dispatch. Real-time stock control, atomic operations via Postgres RPCs and layered security (RLS). Demo login: admin@gmail.com / admin123.",
    "projects.fdt.badge": "Featured",
    "projects.fdt.desc": "A zero-dependency test runner I built from scratch to understand how Jest and Vitest work internally. It includes its own CLI, metrics, and a documentation site with hand-built ES/EN internationalization.",
    "projects.demo": "Live demo ↗",
    "projects.qa.desc": "Automated E2E test suite for saucedemo.com using Selenium, Cucumber (BDD) and the Page Object Model. Explicit waits, screenshot-on-failure and Maven Wrapper.",
    "projects.kylo.desc": "An iOS car-rental app built in Swift, optimized for the experience on Apple devices. I implemented the test automation framework with Java, Selenium and Cucumber, reducing critical bugs before deployment.",
    "projects.markham.desc": "I was part of the team that built the Markham School web interface, delivering a responsive and functional design under modern Front-end standards. Internship at EBP Consulting.",
    "projects.markham.tag": "Responsive",

    "exp.kicker": "Path",
    "exp.title": "Experience",
    "exp.lct.role": "Software Developer",
    "exp.lct.date": "June 2026 – Present",
    "exp.lct.l1": "Software development at an IT company specialized in custom solutions for web, mobile and desktop.",
    "exp.kylo.role": "Mobile Software Developer & QA",
    "exp.kylo.l1": "Built an iOS car-rental app in Swift, optimizing the user experience on Apple devices.",
    "exp.kylo.l2": "Implemented the test automation framework with Java, Selenium and Cucumber, reducing critical bugs before deployment.",
    "exp.ebp.role": "Web Development Intern (Front-end)",
    "exp.ebp.l1": "Was part of the team that built the Markham School website, with a responsive and functional design.",
    "exp.ebp.l2": "Collaborated on various corporate projects under modern Front-end standards.",
    "exp.other.role": "Other professional experience",
    "exp.other.l1": "Logistics Assistant at APEC (Nov 2024): managing international protocols and assisting dignitaries.",
    "exp.other.l2": "Sales and hosting: customer service and conflict resolution at large-scale events.",

    "edu.kicker": "Education",
    "edu.title": "Education & languages",
    "edu.degree": "Technical Professional in Computing & IT",
    "edu.lang": "English — Level B2",
    "edu.lang.sub": "Upper-Intermediate",

    "contact.kicker": "Contact",
    "contact.title": "Let's work together?",
    "contact.lead": "Always open to collaborating, learning and adding value to good teams. If you'd like to talk about a project or an opportunity, drop me a line.",

    "footer.built": "Hand-built with HTML & CSS",
  },
};

const STORAGE_KEY = "rl-lang";

function applyLang(lang) {
  const dict = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = lang === "es" ? "EN" : "ES";
    btn.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
  }

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
}

function currentLang() {
  try { return localStorage.getItem(STORAGE_KEY) || "es"; } catch (_) { return "es"; }
}

function init() {
  applyLang(currentLang());
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.addEventListener("click", () => applyLang(currentLang() === "es" ? "en" : "es"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
