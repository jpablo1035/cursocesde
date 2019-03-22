let Project = require('../Models/ProjectModels');
let controller = {
    home: function (req, res) {
        return res.status(200).send({
            mensaje: "soy el home"
        });
    },
    test: function (req, res) {
        return res.status(200).send({
            mensaje: "soy el metodo test del controlador project"
        });
    },

    saveProject:  (req, res) => {
        let project = new Project();
        let params = req.body;
        project.nombre = params.nombre;
        project.apellido = params.apellido;
        project.ciudad = params.ciudad;
        project.edad = params.edad;
        project.fruta = params.fruta;
        project.animal = params.animal;+
        project.save((err,projectStored)=>{
            if(err){
                return res.status(500).send({
                    mensaje: "no se ha guardado el documento"
                });
            }
            if(!projectStored){
                return res.status(404).send({mensaje: "no se ha podido guardar el proyecto"});
            }
            return res.status(200).send({
                project:projectStored,
                mensaje: "todo esta bien"
            });
        });

         res.status(200).send({
            datos: project,
            mensaje: "todo inicio bien"
        });
    }
}
module.exports = controller;