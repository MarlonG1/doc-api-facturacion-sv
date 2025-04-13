// theme-handler.js - Script único para manejar el tema en todo el sitio
document.addEventListener("astro:page-load", () => {
  // Función para obtener la preferencia de tema
  function getThemePreference() {
    // Primero verificar localStorage
    const storedTheme =
      typeof localStorage !== "undefined" && localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    // Luego verificar preferencia del sistema
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

    // Guardar en localStorage para persistencia
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

  // Manejar el botón de cambio de tema
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
    // Función para obtener la preferencia de tema
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
