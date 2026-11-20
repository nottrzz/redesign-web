const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const serviceMenus = Array.from(document.querySelectorAll(".nav-dropdown"));

serviceMenus.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    if (window.matchMedia("(hover: hover)").matches) {
      menu.open = true;
    }
  });

  menu.addEventListener("mouseleave", () => {
    if (window.matchMedia("(hover: hover)").matches && !menu.contains(document.activeElement)) {
      menu.open = false;
    }
  });

  menu.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!menu.contains(document.activeElement)) {
        menu.open = false;
      }
    }, 0);
  });
});

document.addEventListener("click", (event) => {
  serviceMenus.forEach((menu) => {
    if (event.target instanceof Node && !menu.contains(event.target)) {
      menu.open = false;
    }
  });
});

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a[href]")) {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      serviceMenus.forEach((menu) => {
        menu.open = false;
      });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    const openServiceMenu = serviceMenus.find((menu) => menu.open);
    if (openServiceMenu) {
      openServiceMenu.open = false;
      openServiceMenu.querySelector("summary")?.focus();
      return;
    }

    if (menuToggle.getAttribute("aria-expanded") === "true") {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      menuToggle.focus();
    }
  });
}

const briefForm = document.querySelector("#brief-form");
const briefOutput = document.querySelector("#brief-output");
const formStatus = document.querySelector("#form-status");
const briefWhatsApp = document.querySelector("#brief-whatsapp");

if (briefForm && briefOutput && formStatus && briefWhatsApp instanceof HTMLAnchorElement) {
  briefForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!briefForm.reportValidity()) {
      return;
    }

    const formData = new FormData(briefForm);
    const name = String(formData.get("name") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const needs = String(formData.get("needs") || "").trim();
    const isEnglish = document.documentElement.lang === "en";
    const lines = [
      isEnglish ? "Website project brief — Lombok Devlab" : "Brief website — Lombok Devlab",
      name ? `${isEnglish ? "Name" : "Nama"}: ${name}` : "",
      `${isEnglish ? "Project type" : "Jenis website"}: ${service}`,
      `${isEnglish ? "Project needs" : "Kebutuhan"}: ${needs}`,
    ].filter(Boolean);
    const brief = lines.join("\n");

    briefOutput.hidden = false;
    briefOutput.value = brief;
    briefWhatsApp.href = `https://wa.me/6289518225535?text=${encodeURIComponent(brief)}`;
    briefWhatsApp.hidden = false;

    try {
      await navigator.clipboard.writeText(brief);
      formStatus.textContent = isEnglish
        ? "Your brief is ready and copied. Use the WhatsApp button to send it."
        : "Brief siap dan teksnya disalin. Pilih tombol WhatsApp untuk mengirimkannya.";
    } catch (error) {
      briefOutput.focus();
      briefOutput.select();
      formStatus.textContent = isEnglish
        ? "Your brief is ready. Send it on WhatsApp or copy it from the text box below."
        : "Brief siap. Kirim lewat tombol WhatsApp atau salin dari kotak teks di bawah.";
    }
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const floatingActions = document.querySelector(".floating-actions");
if (floatingActions && "IntersectionObserver" in window) {
  const quietZones = [
    document.querySelector(".hero"),
    document.querySelector(".services"),
    document.querySelector(".portfolio"),
    document.querySelector(".benefits"),
    document.querySelector(".industry"),
    document.querySelector(".faq"),
    document.querySelector(".mobile-app"),
    document.querySelector(".workflow"),
    document.querySelector(".contact"),
  ].filter(Boolean);
  const visibleZones = new Set();
  const actionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleZones.add(entry.target);
      } else {
        visibleZones.delete(entry.target);
      }
    });
    floatingActions.hidden = visibleZones.size > 0;
  }, { threshold: 0.01 });

  floatingActions.hidden = true;
  quietZones.forEach((zone) => actionObserver.observe(zone));
}

document.querySelectorAll(".language-switch").forEach((link) => {
  link.addEventListener("click", () => {
    const language = link.getAttribute("hreflang");
    if (language === "id" || language === "en") {
      try {
        localStorage.setItem("lombokdevlab-language", language);
      } catch {
        return;
      }
    }
  });
});

const localizedPaths = {
  "/": { id: "/", en: "/en/" },
  "/index.html": { id: "/", en: "/en/" },
  "/layanan.html": { id: "/layanan.html", en: "/en/services.html" },
  "/en/services.html": { id: "/layanan.html", en: "/en/services.html" },
  "/tentang.html": { id: "/tentang.html", en: "/en/about.html" },
  "/en/about.html": { id: "/tentang.html", en: "/en/about.html" },
  "/mataram.html": { id: "/mataram.html", en: "/en/mataram.html" },
  "/en/mataram.html": { id: "/mataram.html", en: "/en/mataram.html" },
  "/mandalika.html": { id: "/mandalika.html", en: "/en/mandalika.html" },
  "/en/mandalika.html": { id: "/mandalika.html", en: "/en/mandalika.html" },
  "/solusi.html": { id: "/solusi.html", en: "/en/solutions.html" },
  "/en/solutions.html": { id: "/solusi.html", en: "/en/solutions.html" },
  "/cakupan.html": { id: "/cakupan.html", en: "/en/coverage.html" },
  "/en/coverage.html": { id: "/cakupan.html", en: "/en/coverage.html" },
  "/indonesia.html": { id: "/indonesia.html", en: "/en/indonesia.html" },
  "/en/indonesia.html": { id: "/indonesia.html", en: "/en/indonesia.html" },
  "/internasional.html": { id: "/internasional.html", en: "/en/worldwide.html" },
  "/en/worldwide.html": { id: "/internasional.html", en: "/en/worldwide.html" },
  "/panduan.html": { id: "/panduan.html", en: "/en/guides.html" },
  "/en/guides.html": { id: "/panduan.html", en: "/en/guides.html" },
};

let savedLanguage = null;
try {
  savedLanguage = localStorage.getItem("lombokdevlab-language");
} catch {
  savedLanguage = null;
}

if (!savedLanguage) {
  const locales = navigator.languages?.length ? navigator.languages : [navigator.language];
  const detectedLanguage = locales.map((locale) => {
    try {
      const parsed = new Intl.Locale(locale);
      if (parsed.region) {
        return parsed.region === "ID" ? "id" : "en";
      }
      return parsed.language === "id" ? "id" : parsed.language === "en" ? "en" : null;
    } catch {
      return null;
    }
  }).find(Boolean);
  const currentPath = location.pathname.replace(/\/+$/, "") || "/";
  const routes = localizedPaths[currentPath];
  const currentLanguage = document.documentElement.lang;
  const targetPath = routes?.[detectedLanguage];

  if (targetPath && detectedLanguage !== currentLanguage) {
    location.replace(targetPath);
  }
}
