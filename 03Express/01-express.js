/*PORT=4000
BD_USER=cursonode
BD_PASWORD=AQOhwLtwluCBcewh
BD_NAME=dbpokemon
*/ 
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
require('dotenv').config()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const port = process.env.PORT ||3005

//conection mongoose
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
//para que nadie vea directamente nuestras credenciales
const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASWORD}@cluster0.fpooui4.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`; //URL de conexión, que completaremos luego
// problema con los nombres de las variables y el enlace a la bbdd
mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))

//middleware
app.use(express.static(__dirname + '/public'))

//Motor de plantilla
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use('/', require('./router/rutas'))
//app.use('/pokemon', require('./router/pokemon'))
//Entrenador
//SII DESCOMENTO ESTO NO ME VA 
app.use('/entrenador',require('./router/entrenador'))


//Listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Error controller
app.use((req, res) => {
  res.status(404).render("404", {
    titulo: "Error 404",
    descripcion: "Page not found"
  })
})