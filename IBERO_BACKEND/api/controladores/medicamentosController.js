var medicamentosModel = require('../modelos/medicamentosModel.js').medicamentosModel
var medicamentosController = {}

medicamentosController.Guardar = function(request, response) {

    var post = {
        codigo: request.body.codigo,
        medicamento: request.body.medicamento,
        cantidad: request.body.cantidad,
        precio: request.body.precio

    }
    if (post.codigo == undefined || post.codigo == null || post.codigo.trim() == "") {
        response.json({ state: false, mensaje: "el campo codigo es un campo obligatorio" })
        return false;
    }
    if (post.medicamento == undefined || post.medicamento == null || post.medicamento.trim() == "") {
        response.json({ state: false, mensaje: "el campo medicamento es un campo obligatorio" })
        return false;
    }


    medicamentosModel.VerificarCodigo(post, function(valida) {
        if (valida.state == false) {
            response.json(valida)
        } else {
            medicamentosModel.Guardar(post, function(respuesta) {
                console.log(respuesta)
                response.json(respuesta)
            })

        }
    })


}
medicamentosController.CargarporId = function(request, response) {
    var post = {
        Id: request.body.Id

    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    medicamentosModel.CargarporId(post, function(respuesta) {
        response.json(respuesta)
    })

}
medicamentosController.CargarTodas = function(request, response) {

    medicamentosModel.CargarTodas(null, function(respuesta) {
        response.json(respuesta)
    })
}
medicamentosController.ActualizarporId = function(request, response) {

    var post = {
        Id: request.body.Id,
        medicamento: request.body.medicamento,
        cantidad: request.body.cantidad,
        precio: request.body.precio
    }

    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    if (post.medicamento == undefined || post.medicamento == null || post.medicamento.trim() == "") {
        response.json({ state: false, mensaje: "el campo medicamento es un campo obligatorio" })
        return false;
    }


    medicamentosModel.ActualizarporId(post, function(respuesta) {
        response.json(respuesta)
    })



}

medicamentosController.EliminarporId = function(request, response) {
    var post = {
        Id: request.body.Id,
    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }

    medicamentosModel.EliminarporId(post, function(respuesta) {
        response.json(respuesta)
    })
}


module.exports.medicamentosController = medicamentosController