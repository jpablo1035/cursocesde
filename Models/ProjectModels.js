let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let projectSchema = Schema({
    
    nombre: String,
    apellido: String,
   
    ciudad: String,
    edad: Number,
    fruta: String,
    animal: String,
})

module.exports = mongoose.model('project', projectSchema);



