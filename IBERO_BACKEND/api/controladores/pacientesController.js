var pacientesModel = require('../modelos/pacientesModel.js').pacientesModel
var pacientesController = {}

pacientesController.Guardar = function(request, response) {

    var post = {
        fecha: request.body.fecha,
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        cedula: request.body.cedula,
        contacto: request.body.contacto,
        medicamento: request.body.medicamento,

    }
    if (post.nombre == undefined || post.nombre == null || post.nombre.trim() == "") {
        response.json({ state: false, mensaje: "el campo nombre es un campo obligatorio" })
        return false;
    }
    if (post.cedula == undefined || post.cedula == null || post.cedula.trim() == "") {
        response.json({ state: false, mensaje: "el campo cedula es un campo obligatorio" })
        return false;
    }

    pacientesModel.VerificarCedula(post, function(valida) {
        if (valida.state == false) {
            response.json(valida)
        } else {
            pacientesModel.Guardar(post, function(respuesta) {
                console.log(respuesta)
                response.json(respuesta)
            })

        }
    })


}

pacientesController.CargarporId = function(request, response) {
    var post = {
        Id: request.body.Id

    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    pacientesModel.CargarporId(post, function(respuesta) {
        response.json(respuesta)
    })

}
pacientesController.CargarTodas = function(request, response) {

    pacientesModel.CargarTodas(null, function(respuesta) {
        response.json(respuesta)
    })
}
pacientesController.ActualizarporId = function(request, response) {

    var post = {
        Id: request.body.Id,
        fecha: request.body.fecha,
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        contacto: request.body.contacto,
        medicamento: request.body.medicamento,
    }

    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    if (post.nombre == undefined || post.nombre == null || post.nombre.trim() == "") {
        response.json({ state: false, mensaje: "el campo nombre es un campo obligatorio" })
        return false;
    }


    pacientesModel.ActualizarporId(post, function(respuesta) {
        response.json(respuesta)
    })



}

pacientesController.EliminarporId = function(request, response) {
    var post = {
        Id: request.body.Id,
    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }

    pacientesModel.EliminarporId(post, function(respuesta) {
        response.json(respuesta)
    })
}


module.exports.pacientesController = pacientesController