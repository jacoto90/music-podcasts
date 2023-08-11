# music-podcasts
music podcasts (angular)

# Mi Proyecto de Podcast en Angular

Este repositorio contiene un proyecto de podcast desarrollado con Angular. El proyecto permite visualizar detalles de podcasts y episodios.

## Características

- **Vista de detalles de podcast**: Muestra la imagen, título, artista y descripción del podcast seleccionado.
- **Vista de detalles de episodio**: Muestra el título, descripción y un reproductor de audio para escuchar el episodio.
- **Servicios para recuperar datos**: Utilizamos servicios para obtener los detalles del podcast y episodio.

## Solución a problemas comunes

Durante el desarrollo, nos encontramos con algunos problemas. Aquí están las soluciones que aplicamos:

1. **Datos no visualizados**: Asegúrate de que el servicio esté recuperando los datos correctamente y que las propiedades del objeto coincidan con lo que se muestra en el HTML.

2. **Errores al obtener datos**: Verificamos los logs en la consola del navegador para identificar y solucionar problemas.

3. **Estilo de enlaces**: Creamos una clase `.episode-link` para estilizar los enlaces del episodio.

## Cómo configurar el proyecto

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta el proyecto con `ng serve`.

## Contribuciones

Si deseas contribuir al proyecto, ¡siempre eres bienvenido! Abre un 'Pull Request' con tus cambios.

## Pasos para guardar cambios en GitHub

1. Inicializa git en el proyecto: `git init`.
2. Conecta con el repositorio de GitHub: `git remote add origin [URL-del-repositorio]`.
3. Agrega los cambios: `git add .`.
4. Crea un commit: `git commit -m "Descripción de los cambios"`.
5. Sube los cambios a GitHub: `git push -u origin master`.

---

Creado con ❤️ durante una colaborativa sesión de solución de problemas.

