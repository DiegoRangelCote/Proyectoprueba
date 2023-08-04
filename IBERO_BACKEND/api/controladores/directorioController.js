var directorioModel = require('../modelos/directorioModel.js').directorioModel
var directorioController = {}

directorioController.Guardar = function(request, response) {

    var post = {
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        cedula: request.body.cedula,
        direccion: request.body.direccion,


    }
    if (post.nombre == undefined || post.nombre == null || post.nombre.trim() == "") {
        response.json({ state: false, mensaje: "el campo nombre es un campo obligatorio" })
        return false;
    }
    if (post.cedula == undefined || post.cedula == null || post.cedula.trim() == "") {
        response.json({ state: false, mensaje: "el campo cedula es un campo obligatorio" })
        return false;
    }
    if (post.direccion == undefined || post.direccion == null || post.direccion.trim() == "") {
        response.json({ state: false, mensaje: "el campo direccion es un campo obligatorio" })
        return false;
    }

    directorioModel.VerificarCedula(post, function(valida) {
        if (valida.state == false) {
            response.json(valida)
        } else {
            directorioModel.Guardar(post, function(respuesta) {
                console.log(respuesta)
                response.json(respuesta)
            })

        }
    })


}

directorioController.CargarporId = function(request, response) {
    var post = {
        Id: request.body.Id

    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    directorioModel.CargarporId(post, function(respuesta) {
        response.json(respuesta)
    })

}
directorioController.CargarTodas = function(request, response) {

    directorioModel.CargarTodas(null, function(respuesta) {
        response.json(respuesta)
    })
}
directorioController.ActualizarporId = function(request, response) {

    var post = {
        Id: request.body.Id,
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        direccion: request.body.direccion,

    }

    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    if (post.nombre == undefined || post.nombre == null || post.nombre.trim() == "") {
        response.json({ state: false, mensaje: "el campo nombre es un campo obligatorio" })
        return false;
    }


    directorioModel.ActualizarporId(post, function(respuesta) {
        response.json(respuesta)
    })



}

directorioController.EliminarporId = function(request, response) {
    var post = {
        Id: request.body.Id,
    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }

    directorioModel.EliminarporId(post, function(respuesta) {
        response.json(respuesta)
    })
}


module.exports.directorioController = directorioController