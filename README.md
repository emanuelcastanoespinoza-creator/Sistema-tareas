 Sistema de Tareas - React
 Descripción

Este proyecto es una aplicación web desarrollada con React que permite gestionar tareas de manera sencilla. El usuario puede crear, editar, eliminar y marcar tareas como completadas, además de filtrarlas según su estado.

La aplicación funciona como una SPA (Single Page Application), lo que significa que no recarga la página al interactuar, ofreciendo una experiencia más rápida y fluida.

 Funcionalidades
 Crear nuevas tareas
 Editar tareas existentes
 Eliminar tareas
 Marcar tareas como completadas o pendientes
 Filtrar tareas (todas, completadas, pendientes)
 Persistencia de datos usando localStorage
 Estructura del proyecto
src/
│
├── components/
│   ├── FormularioTarea.jsx
│   ├── TareaCard.jsx
│   └── FiltroTareas.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Tareas.jsx
│   └── Acerca.jsx
│
├── App.jsx
├── main.jsx
└── index.css
 Tecnologías utilizadas
React
JavaScript (ES6)
HTML5
CSS3
React Router (para navegación)
 Explicación técnica
. Manejo de estado

Se utiliza useState para:

Almacenar la lista de tareas
Controlar el filtro
Manejar inputs del formulario
Controlar el modo edición
. Persistencia de datos

Se utiliza localStorage para guardar las tareas:

Al iniciar la app → se cargan las tareas guardadas
Cada vez que cambian → se actualizan automáticamente
. useEffect

Se usa para:

Ejecutar el guardado en localStorage cuando cambian las tareas
. Props

Se utilizan para comunicar componentes:

App → envía datos y funciones a los hijos
Componentes hijos → ejecutan acciones usando esas funciones
. Renderizado dinámico

Se usa map() para:

Recorrer el arreglo de tareas
Renderizar cada tarea en pantalla
 Flujo de la aplicación
El usuario escribe una tarea en el formulario
Se ejecuta handleSubmit
Se crea un objeto tarea
Se envía a App.jsx
Se actualiza el estado (tareas)
React vuelve a renderizar
Se muestra la nueva tarea en pantalla
Validaciones
No se permite crear tareas sin título
Se usa trim() para evitar espacios vacíos
 Interfaz
Interfaz simple y clara
Uso de clases CSS para estilos
Navegación entre páginas usando rutas
 Navegación

Se implementa con React Router:

/ → Inicio
/tareas → Lista de tareas
/acerca → Información del proyecto

 Instalación y ejecución
Clonar el repositorio:
git clone <url-del-repositorio>
Instalar dependencias:
npm install
Ejecutar el proyecto:
npm run dev
 Build para producción
npm run build

Esto genera la carpeta dist lista para desplegar.

 Despliegue

El proyecto puede desplegarse en plataformas como:

Render
Vercel
Netlify

Configuración básica:

Build command: npm run build
Output folder: dist
 Conclusión

Este proyecto demuestra el uso de React para crear aplicaciones dinámicas, utilizando componentes, manejo de estado, renderizado dinámico y almacenamiento local. Además, implementa buenas prácticas como la separación de componentes y validación de datos.