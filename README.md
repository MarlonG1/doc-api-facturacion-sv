# Documentación API de Facturación Electrónica

Este repositorio contiene el sitio web de documentación para la API de Facturación Electrónica, diseñado para ayudar a los desarrolladores a integrar fácilmente la facturación electrónica en sus aplicaciones.

## Características

- 📱 Sitio web responsivo
- 🌗 Modo claro/oscuro
- 📖 Documentación detallada
- 🧩 Componentes reutilizables
- 🔍 Búsqueda integrada
- 🚀 Despliegue automático en GitHub Pages

## Tecnologías

- **[Astro](https://astro.build/)** - Framework web para sitios estáticos de alto rendimiento
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de utilidades CSS para diseño rápido
- **[TypeScript](https://www.typescriptlang.org/)** - Superset de JavaScript con tipado estático

## Desarrollo Local

Para ejecutar este proyecto localmente:

```bash
# Clonar el repositorio
git clone https://github.com/marlong1/doc-api-facturacion-sv.git
cd doc-api-facturacion-sv

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

## Estructura del Proyecto

```
/
├── public/             # Archivos estáticos
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Layouts de página
│   ├── pages/          # Páginas del sitio
│   │   └── docs/       # Documentación
│   └── styles/         # Estilos globales
└── astro.config.mjs    # Configuración de Astro
```

## Despliegue

Este sitio se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`. El flujo de trabajo de GitHub Actions está configurado en `.github/workflows/deploy.yml`.

## Contribuir

1. Haz un Fork del repositorio
2. Crea una rama para tu contribución (`git checkout -b feature/amazing-feature`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
5. Haz push a la rama (`git push origin feature/amazing-feature`)
6. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo [GPL License](LICENSE).

```sh
npm create astro@latest -- --template basics
```