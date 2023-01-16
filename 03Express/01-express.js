const express = require('express')
const bodyParser  = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
require('dotenv').config()
const port = process.env.PORT || 3005

//motor plantillas

app.set('view engine','ejs' )
app.set('views',__dirname+'/views')

//Conexión a base de datos
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
//para que nadie vea directamente nuestras credenciales
/*const user = 'cursonode';
const password = 'wDT3pcDGPPmRzAoo';
const dbname = 'dbpokemon';*/

const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASSWORD}@cluster0.fpooui4.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`; //URL de conexión, que completaremos luego
mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))


//ruta middel 
app.use(express.static(__dirname+'/public'));
/*
app.get('/', (req, res) => {
    res.render("index",{titulo:"mi titulo dinamico"})
})

app.use((req,res) => {
    res.status(404).render("404",{
        titulo:"Error 404",
        descriptions: "no te found"
    });
   })
  */ 
   // llamadas a las rutas 
   app.use('/',require('./router/rutas'))
   app.use('/pokemon',require('./router/pokemon'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
