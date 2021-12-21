## Proyecto de tienda de juguetes

Es una tienda de juguetes dinamica que simula una app para generar ordenes de compra online
realizada para el proyecto final del curso de React JS de Coderhouse.

## Demo Testing

- Se subio a NETLIFY el deploy del proyecto:

[Ir a la APP] (https://sad-panini-be1996.netlify.app/)

## Dependencias

- react: aplicacion creada con create-react-app
- fortawesome: para incorporar el icono de carrito de compras, y otros iconos a futuro.
- react bootstrap: para manejar los estilos del proyecto
- react-router-dom: para crear la SPA con navegabilidad sin refrescar la pantalla
- netlify: es nuestro deploy del proyecto vinculado al repo de github.
- firebase: es nuestro soporte de backend y base de datos.
- react reveal: se instalo la libreria para dar animacion a la APP.

## Implementaciones

- Se creo un alert personalizado que se utiliza para toda la mensajeria de la APP incluido la orden de compra
  (MessageAlert)

## Herramientas

IMPORTADOR DE JSON

- si tienes un archivo JSON para importar a Netlify, debes usar la siguiente sentencia (p.e. en un boton):
  const data = require('../../../Products.json')
  const incorp = () => {data.map(prod => db.collection('items').add(prod))};

## NOTAS DEL AUTOR

- Por cuestiones personales se deja el archivo getProducts.jsx y Products.JSON, ambos sin utilidad.

## REACT REVEAL

- Requiere reemplazar el componente desactualizado componentWillReceiveProps, para eliminar el warning por defecto.
  - Sugiere ejecutar en la carpeta del proyecto el comando:
    npx react-codemod rename-unsafe-lifecycles
  - luego reemplazar componentWillReceiveProps por UNSAFE_componentWillReceiveProps dentro de la ruta
    react-reveal/src/RevealBase.js
