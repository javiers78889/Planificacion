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

- Next js + ShadCN UI
- JSON estático para datos curriculares
- Tabla interactiva con filtros y búsqueda

## Pasos
1. Analice los documentos facilitados, me apoye con la herramienta chatgpt.
2. extrai las claves para empezar a estructurar el JSON
3. Cree un objeto `Planes` en `/src`.
4. cree el componente `PlanesTable` en para trabajar la parte iterativa.
5. Dentro del `PlanesTable` cree un pequeño buscador para filtrar por grado,año y área. si el usuario no ingresa nada se muestra toda la info contenida en el JSON.
6. Se creo un boton JSONVIEWER para visualizar el json . si se desea descargar el mismo se puede presionar el boton "Descargar"
7. Tambien se agregó el botón para descargar este Readme

