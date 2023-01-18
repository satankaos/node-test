const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrenadorSchema = new Schema({
    Nombre: String,
    Bio: String,
    Ciudad: String,
    Lista_Pokemon: String

})

//Creamos el modelo
const Entrenador = mongoose.model('dbpokemon', entrenadorSchema, "entrenador");

module.exports = Entrenador;
