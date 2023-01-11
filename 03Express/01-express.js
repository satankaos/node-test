const express = require('express')
const app = express()
const port = 3005
//motor plantillas
app.set('view engine','ejs' )
app.set('views',__dirname+'/views')


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
