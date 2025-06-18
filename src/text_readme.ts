export const dataReadme = `
# Planes Curriculares

## Estructura del JSON

Cada plan incluye:
- Grado
- Año
- Áreas:
  - Objetivos
  - Contenidos
    - Tema
    - Indicadores
    - Actividades

## Tecnologías

- Next.js + ShadCN UI
- JSON estático para datos curriculares
- Tabla interactiva con filtros y búsqueda

#Liberias
- ReactJson (para mostrar el json)
- lucide react (para los iconos)
- hook usestate (para manejar los estados de la barra de búsqueda)

## Pasos
1. Analicé los documentos facilitados, me apoyé con la herramienta ChatGPT.
2. Extraí las claves para empezar a estructurar el JSON.
3. Creé un objeto \`planes\` en \`/src\`.
4. Creé el componente \`PlanesTable\` para trabajar la parte iterativa.
5. Dentro del \`PlanesTable\`, creé un pequeño buscador para filtrar por grado, año y área. Si el usuario no ingresa nada, se muestra toda la info contenida en el JSON.
6. Se creó un botón \`JSONViewer\` para visualizar el JSON. Si se desea descargar, se puede presionar el botón "Descargar".
7. También se agregó el botón para descargar este README.
`;
