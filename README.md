📈 Info Crypto – App Web de Información y Conversión de Criptomonedas

Info Crypto es una aplicación web moderna construida con React que permite a los usuarios consultar datos en tiempo real sobre criptomonedas: precios, noticias, estadísticas y conversión entre activos. Está diseñada para demostrar buenas prácticas de desarrollo frontend y habilidades técnicas clave para un perfil junior de desarrollo web.

🚀 🚀 Características

✅ Listado de criptomonedas con precios actualizados.
✅ Conversor de criptos que permite comparar activos entre sí.
✅ Noticias del mercado para mantener al usuario informado.
✅ Sistema de caché inteligente para reducir llamadas a API.
✅ Interfaz clara y funcional, responsive y fácil de usar.
✅ Uso de APIs públicas para datos reales del mercado.

🛠 Tecnologías empleadas

React con Hooks

JavaScript moderno (ES6+)

Tailwind CSS para diseño visual

LocalStorage para caché de datos

Fetch para consumo de APIs

Netlify para despliegue gratuito y continuo

📁 Estructura del proyecto

El código está organizado por responsabilidades, facilitando escalabilidad y mantenibilidad:

src/
├─ components/ # Componentes reutilizables UI
├─ pages/ # Páginas principales de la app
├─ services/ # Llamadas a APIs y lógica de obtención de datos
├─ hooks/ # Custom Hooks
├─ utils/ # Funciones auxiliares (formateo, cache, etc.)
├─ styles/ # Tailwind + estilos globales
└─ App.jsx # Punto de entrada

📌 Lógica destacada
💡 Cache inteligente con expiración

La función KeepInfo() guarda datos en localStorage y solo hace nueva petición a la API si han pasado más de 5 minutos desde el último fetch, reduciendo consumo de red innecesario.

Este tipo de optimizaciones demuestran pensamiento arquitectónico enfocado en UX y rendimiento.

⚡ Deploy & Demo

La aplicación está desplegada en Netlify, con integración continua desde el repositorio.
Accede al demo público y prueba todas las funcionalidades en:
👉 https://info-cripto.netlify.app/
