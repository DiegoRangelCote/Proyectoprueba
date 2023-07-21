var usuariosModel = require('../modelos/usuariosModel.js').usuariosModel
var usuariosController = {}


usuariosController.Guardar = function(request, response) {

    var post = {
        cedula: request.body.cedula,
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        edad: request.body.edad,
        correo: request.body.correo,
        contrasena: request.body.contrasena
    }

    if (post.nombre == undefined || post.nombre == null || post.nombre.trim() == "") {
        response.json({ state: false, mensaje: "el campo nombre es un campo obligatorio" })
        return false;
    }
    if (post.correo == undefined || post.correo == null || post.correo.trim() == "") {
        response.json({ state: false, mensaje: "el campo correo es un campo obligatorio" })
        return false;
    }
    if (post.contrasena == undefined || post.contrasena == null || post.contrasena.trim() == "") {
        response.json({ state: false, mensaje: "el campo contrasena es un campo obligatorio" })
        return false;
    }
    if (post.cedula == undefined || post.cedula == null || post.cedula.trim() == "") {
        response.json({ state: false, mensaje: "el campo cedula es un campo obligatorio" })
        return false;
    }

    if (post.nombre.length < 4) {
        response.json({ state: false, mensaje: "el nombre debe ser superior a 3 caracteres" })
        return false;
    }
    if (post.apellido == undefined || post.apellido == null || post.apellido.trim() == "") {
        response.json({ state: false, mensaje: "el campo apellido es un campo obligatorio" })
        return false;
    }


    usuariosModel.VerificarCedula(post, function(valida) {
        if (valida.state == false) {
            response.json(valida)
        } else {
            usuariosModel.Guardar(post, function(respuesta) {
                console.log(respuesta)
                response.json(respuesta)
            })

        }
    })


}
usuariosController.CargarporCedula = function(request, response) {
    var post = {
        cedula: request.body.cedula

    }
    if (post.cedula == undefined || post.cedula == null || post.cedula.trim() == "") {
        response.json({ state: false, mensaje: "el campo cedula es un campo obligatorio" })
        return false;
    }
    usuariosModel.CargarporCedula(post, function(respuesta) {
        response.json(respuesta)
    })

}
usuariosController.CargarTodas = function(request, response) {

    usuariosModel.CargarTodas(null, function(respuesta) {
        response.json(respuesta)
    })
}
usuariosController.ActualizarporCedula = function(request, response) {

    var post = {
        cedula: request.body.cedula,
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        edad: request.body.edad
    }

    if (post.nombre == undefined || post.nombre == null || post.nombre.trim() == "") {
        response.json({ state: false, mensaje: "el campo nombre es un campo obligatorio" })
        return false;
    }
    if (post.cedula == undefined || post.cedula == null || post.cedula.trim() == "") {
        response.json({ state: false, mensaje: "el campo cedula es un campo obligatorio" })
        return false;
    }

    if (post.nombre < 4) {
        response.json({ state: false, mensaje: "el nombre debe ser superior a 3 caracteres" })
        return false;
    }
    if (post.apellido == undefined || post.apellido == null || post.apellido.trim() == "") {
        response.json({ state: false, mensaje: "el campo apellido es un campo obligatorio" })
        return false;
    }

    usuariosModel.VerificarCedula(post, function(valida) {
        if (valida.state == true) {
            response.json({ state: false, mensaje: "no se puede actualizar una cedula inexistente" })
            return false
        } else {
            usuariosModel.ActualizarporCedula(post, function(respuesta) {
                response.json(respuesta)
            })
        }
    })



}

usuariosController.EliminarporCedula = function(request, response) {
    var post = {
        cedula: request.body.cedula,
    }
    if (post.cedula == undefined || post.cedula == null || post.cedula.trim() == "") {
        response.json({ state: false, mensaje: "el campo cedula es un campo obligatorio" })
        return false;
    }
    usuariosModel.VerificarCedula(post, function(valida) {
        if (valida.state == true) {
            response.json({ state: false, mensaje: "no se puede eliminar una cedula inexistente" })
            return false
        } else {
            usuariosModel.EliminarporCedula(post, function(respuesta) {
                response.json(respuesta)
            })
        }
    })
}

usuariosController.Ingresar = function(request, response) {
    var post = {
        correo: request.body.correo,
        contraseña: request.body.contraseña

    }
    if (post.correo == undefined || post.correo == null || post.correo.trim() == "") {
        response.json({ state: false, mensaje: "el campo correo es un campo obligatorio" })
        return false;
    }
    if (post.contraseña == undefined || post.contraseña == null || post.contraseña.trim() == "") {
        response.json({ state: false, mensaje: "el campo contraseña es un campo obligatorio" })
        return false;
    }
    usuariosModel.Ingresar(post, function(respuesta) {
        if (respuesta.state == false) {
            response.json({ state: false, mensaje: "error al iniciar sesion" })
        } else {
            if (respuesta.documentos.length == 0) {
                response.json({ state: false, mensaje: "correo y contraseña no coinciden" })
            } else {
                console.log(respuesta.documentos)
                request.session.rol = respuesta.documentos[0].rol
                request.session.correo = respuesta.documentos[0].correo
                console.log(request.session)
                response.json({ state: true, mensaje: "Bienvenido" })
            }
        }
    })

}

module.exports.usuariosController = usuariosController