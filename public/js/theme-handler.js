document.addEventListener("astro:page-load", () => {
  function getThemePreference() {
    const storedTheme =
      typeof localStorage !== "undefined" && localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    // Default a light
    return "light";
  }

  // Función para establecer el tema
  function setTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", theme);
    }

    // Disparar evento para que otros scripts puedan reaccionar
    document.dispatchEvent(
      new CustomEvent("themeChanged", { detail: { theme } })
    );
  }

  // Exponer funciones globalmente para que otros scripts puedan usarlas
  window.getThemePreference = getThemePreference;
  window.setTheme = setTheme;

  // Aplicar el tema actual
  const currentTheme = getThemePreference();
  setTheme(currentTheme);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = getThemePreference();
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  }
});

// También inicializar en la carga inicial (para la primera página)
document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.getThemePreference !== "function") {
    function getThemePreference() {
      const storedTheme =
        typeof localStorage !== "undefined" && localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    // Función para establecer el tema
    function setTheme(theme) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
      localStorage.setItem("theme", theme);
    }

    // Aplicar tema inicial
    const theme = getThemePreference();
    setTheme(theme);

    // Exponer funciones
    window.getThemePreference = getThemePreference;
    window.setTheme = setTheme;

    // Manejar el botón de cambio de tema
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const currentTheme = getThemePreference();
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
      });
    }
  }
});

// Añadir un manejador para el evento astro:before-swap para conservar el tema durante las transiciones de página
document.addEventListener("astro:before-swap", (event) => {
  // Obtener el tema actual antes de la transición
  const currentTheme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";

  if (currentTheme === "dark") {
    event.newDocument.documentElement.classList.add("dark");
    event.newDocument.documentElement.classList.remove("light");
  } else {
    event.newDocument.documentElement.classList.add("light");
    event.newDocument.documentElement.classList.remove("dark");
  }
});
