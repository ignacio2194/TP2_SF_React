# Descripcion general del proyecto

El proposito de este proyecto es transformar el checkpoint #1 que esta hecho con HTML-CSS y JavaScript a React.js.

## Equipo 
- Benitez Ignacio
- Cazal Damian
- Scharf Guillermo

## Tecnologias usadas
- [React.js](https://en.reactjs.org/)
- [NMP](https://www.npmjs.com/)
- [Tailwind](https://tailwindcss.com/)

## Recursos
Para mostrar la informacion en la pantalla del navegador se uso 2 API REST distintas.
- [https://rickandmortyapi.com](https://rickandmortyapi.com)
- [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

Para este proyecto se decidio usa el gestor de paquetes npm.

Podran ver el primer proyecto aca [Repositorio del Primer Proyecto](https://github.com/guillescharf/TP1_SF_React.git).

## Como instalar el proyecto en tu ordenador
El proyecto se encuentra en GitHub en este [Repositorio](https://github.com/ignacio2194/TP2_SF_React.git)
Antes de clonar el proyecto desde GitHub en nuestro ordenador lo que se tiene que tener en cuenta es que este automaticamente nos creara una carpeta donde se encontrara el proyecto clonado.

Una vez ubicado donde queremos que este nuestro proyecto clonado usando nuestra consola/terminal de preferencia ejecutaremos el comando:

```
git clone https://github.com/ignacio2194/TP2_SF_React.git
```
Este comando nos creara una carpeta con el nombre TP2_SF_React donde en la misma consola ejecutaremos
```
cd TP2_SF_React
```
Una vez dentro de la carpeta para hacer funcionar el proyecto necesitaremos instalar todas las dependencias que necesita el proyecto para eso ejecutaremos el comando:
```
npm install
```

## Comandos disponibles

En el directorio del proyecto, puede ejecutar:

```
npm start
```

Ejecuta la aplicacion en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

Aclaracion este proceso puede tardar algunos minutos dependiendo de la velocidad de internet y del los componente de la pc que se posea.

Lapagina se volvera a cargar cuando realice cambios.\
Tambien puede ver los errores en la consola.

## ¿Que contiene y que hace cada pagina?

### Home

Pantalla de inicio, en el que se muestra la información del proyecto, y los integrantes del grupo de trabajo.

### Users
### Card
### Contact Us

En esta sección se desarrollo un formulario de contacto que consiste de 3 campos: Nombre, Email y 
Comentarios. Se realizan validaciones básicas en el formato del Email (usuario@dominio.extension) y como campos requeridos el Nombre y los comentarios. 

Se utilizaron estados para la maniplación de los campos, y se simula el envío de la información mostrando
los datos por pantalla.