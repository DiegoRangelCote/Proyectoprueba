var permisosModel = require('../modelos/permisosModel.js').permisosModel
var permisosController = {}

permisosController.Guardar = function(request, response) {

    var post = {
        ruta: request.body.ruta,
        estado: request.body.estado,
        rol_id: request.body.rol_id,

    }
    if (post.ruta == undefined || post.ruta == null || post.ruta.trim() == "") {
        response.json({ state: false, mensaje: "el campo ruta es un campo obligatorio" })
        return false;
    }
    if (post.estado == undefined || post.estado == null || post.estado.trim() == "") {
        response.json({ state: false, mensaje: "el campo estado es un campo obligatorio" })
        return false;
    }
    if (post.rol_id == undefined || post.rol_id == null || post.rol_id.trim() == "") {
        response.json({ state: false, mensaje: "el campo rol_id es un campo obligatorio" })
        return false;
    }

    permisosModel.Guardar(post, function(respuesta) {
        console.log(respuesta)
        response.json(respuesta)
    })


}

permisosController.CargarporId = function(request, response) {
    var post = {
        Id: request.body.Id

    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    permisosModel.CargarporId(post, function(respuesta) {
        response.json(respuesta)
    })

}
permisosController.CargarTodas = function(request, response) {

    permisosModel.CargarTodas(null, function(respuesta) {
        response.json(respuesta)
    })
}
permisosController.ActualizarporId = function(request, response) {

    var post = {
        Id: request.body.Id,
        ruta: request.body.ruta,
        estado: request.body.estado,
        rol_id: request.body.rol_id,

    }

    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }
    if (post.ruta == undefined || post.ruta == null || post.ruta.trim() == "") {
        response.json({ state: false, mensaje: "el campo ruta es un campo obligatorio" })
        return false;
    }
    if (post.estado == undefined || post.estado == null || post.estado.trim() == "") {
        response.json({ state: false, mensaje: "el campo estado es un campo obligatorio" })
        return false;
    }
    if (post.rol_id == undefined || post.rol_id == null || post.rol_id.trim() == "") {
        response.json({ state: false, mensaje: "el campo rol_id es un campo obligatorio" })
        return false;
    }


    permisosModel.ActualizarporId(post, function(respuesta) {
        response.json(respuesta)
    })



}

permisosController.EliminarporId = function(request, response) {
    var post = {
        Id: request.body.Id,
    }
    if (post.Id == undefined || post.Id == null || post.Id.trim() == "") {
        response.json({ state: false, mensaje: "el campo Id es un campo obligatorio" })
        return false;
    }

    permisosModel.EliminarporId(post, function(respuesta) {
        response.json(respuesta)
    })
}


module.exports.permisosController = permisosController