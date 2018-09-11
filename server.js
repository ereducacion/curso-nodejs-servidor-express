const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

// para ejecutar una función cuando haya sido arrancado el servidor:
app.listen(3000, () => {
  console.log('Servidor web arrancado en el puerto 3000')
})

app.get('/contactar-plano', (req, res) => {
  res.send('Pagina para contactar');
});

// ahora devuelve un json
app.get('/contactar-json-normal', (req, res) => {
  res.send({
    nombre: 'pepito',
    email: 'pepito@gmail.com'
  })
})

// ahora devuelve un json de un archivo
const contacto = require ('./contacto.json')
app.get('/contactar', (req, res) => {
  res.send(contacto);
});
