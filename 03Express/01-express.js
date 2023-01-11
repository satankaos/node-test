const express = require('express')
const app = express()
const port = 3005
//motor plantillas
app.set('view engine','ejs' )
app.set('views',__dirname+'/views')


//ruta middel 
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.render("index",{titulo:"mi titulo dinamico"})
})

app.get('/contacto', (req, res) => {
    res.render("contacto",{tituloContacto:"hola contacto"})
})
app.use((req,res) => {
    res.status(404).render("404",{
        titulo:"Error 404",
        descriptions: "no te found"
    });
   })
   
   


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
