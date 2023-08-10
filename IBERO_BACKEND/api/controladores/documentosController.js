var documentosModel = require('../modelos/documentosModel.js').documentosModel
var documentosController = {}

documentosController.Guardar = function(request, response) {

    var post = {
        cedula: request.body.cedula,
        nombre: request.body.nombre,
        apellido: request.body.apellido,

    }
    if (post.cedula == undefined || post.cedula == null || post.cedula.trim() == "") {
        response.json({ state: false, mensaje: "el campo cedula es un campo obligatorio" })
        return false;
    }
    if (post.nombre == undefined || post.nombre == null || post.nombre.trim() == "") {
        response.json({ state: false, mensaje: "el campo nombre es un campo obligatorio" })
        return false;
    }
    if (post.apellido == undefined || post.apellido == null || post.apellido.trim() == "") {
        response.json({ state: false, mensaje: "el campo apellido es un campo obligatorio" })
        return false;
    }

    documentosModel.VerificarCedula(post, function(valida) {
        if (valida.state == false) {
            response.json(valida)
        } else {
            documentosModel.Guardar(post, function(respuesta) {
                console.log(respuesta)
                response.json(respuesta)
            })

        }
    })


}
//cambiar por cedula
documentosController.CargarporId = function(request, response) {
    var post = {
        Id: request.body.Id

    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    documentosModel.CargarporId(post, function(respuesta) {
        response.json(respuesta)
    })

}
documentosController.CargarTodas = function(request, response) {

    documentosModel.CargarTodas(null, function(respuesta) {
        response.json(respuesta)
    })
}
documentosController.ActualizarporId = function(request, response) {

    var post = {
        Id: request.body.Id,
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        cedula: request.body.cedula,

    }

    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    if (post.nombre == undefined || post.nombre == null || post.nombre.trim() == "") {
        response.json({ state: false, mensaje: "el campo nombre es un campo obligatorio" })
        return false;
    }


    documentosModel.ActualizarporId(post, function(respuesta) {
        response.json(respuesta)
    })



}

documentosController.EliminarporId = function(request, response) {
    var post = {
        Id: request.body.Id,
    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }

    documentosModel.EliminarporId(post, function(respuesta) {
        response.json(respuesta)
    })
}


module.exports.documentosController = documentosController