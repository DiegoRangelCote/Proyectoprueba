var serviciosModel = require('../modelos/serviciosModel.js').serviciosModel
var serviciosController = {}

serviciosController.Guardar = function(request, response) {

    var post = {
        codigo: request.body.codigo,
        servicio: request.body.servicio,
        descripcion: request.body.descripcion,

    }
    if (post.codigo == undefined || post.codigo == null || post.codigo.trim() == "") {
        response.json({ state: false, mensaje: "el campo codigo es un campo obligatorio" })
        return false;
    }
    if (post.servicio == undefined || post.servicio == null || post.servicio.trim() == "") {
        response.json({ state: false, mensaje: "el campo servicio es un campo obligatorio" })
        return false;
    }

    serviciosModel.VerificarCodigo(post, function(valida) {
        if (valida.state == false) {
            response.json(valida)
        } else {
            serviciosModel.Guardar(post, function(respuesta) {
                console.log(respuesta)
                response.json(respuesta)
            })

        }
    })


}

serviciosController.CargarporId = function(request, response) {
    var post = {
        Id: request.body.Id

    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    serviciosModel.CargarporId(post, function(respuesta) {
        response.json(respuesta)
    })

}
serviciosController.CargarTodas = function(request, response) {

    serviciosModel.CargarTodas(null, function(respuesta) {
        response.json(respuesta)
    })
}
serviciosController.ActualizarporId = function(request, response) {

    var post = {
        Id: request.body.Id,
        codigo: request.body.codigo,
        servicio: request.body.servicio,
        descripcion: request.body.descripcion,

    }

    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    if (post.servicio == undefined || post.servicio == null || post.servicio.trim() == "") {
        response.json({ state: false, mensaje: "el campo servicio es un campo obligatorio" })
        return false;
    }


    serviciosModel.ActualizarporId(post, function(respuesta) {
        response.json(respuesta)
    })



}

serviciosController.EliminarporId = function(request, response) {
    var post = {
        Id: request.body.Id,
    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }

    serviciosModel.EliminarporId(post, function(respuesta) {
        response.json(respuesta)
    })
}


module.exports.serviciosController = serviciosController