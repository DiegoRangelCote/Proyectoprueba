const mongoose = require('mongoose')
var usuariosModel = {}
var datos = []

const Schema = mongoose.Schema;
var UsuariosSchema = new Schema({
    nombre: String,
    cedula: Number,
    apellido: String,
    edad: Number,
    correo: String,
    contraseña: String,
    rol: String
})

const Mymodel = mongoose.model("usuarios", UsuariosSchema)


usuariosModel.Guardar = function(post, callback) {

    const instancia = new Mymodel
    instancia.nombre = post.nombre
    instancia.cedula = post.cedula
    instancia.apellido = post.apellido
    instancia.edad = post.edad
    instancia.correo = post.correo
    instancia.contrasena = post.contrasena
    instancia.rol = 1


    instancia.save((error, Creado) => {
        if (error) {
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Usuario Almacenado" })
        }
    })

    // datos.push({ cedula: post.cedula, nombre: post.nombre, apellido: post.apellido, edad: post.edad })
    // return callback({ state: true, mensaje: "Usuario Almacenado" })
}

usuariosModel.VerificarCedula = function(post, callback) {


    Mymodel.find({ cedula: post.cedula }, { cedula: 1 }, (error, documentos) => {
        console.log(documentos)
        if (error) {
            return callback({ state: false })
        } else {
            if (documentos.length == 0) {
                return callback({ state: true, mensaje: "No hay usuarios con esa cedula continua" })
            } else {
                return callback({ state: false, mensaje: "ya existe un usuario con esa cedula " })
            }
        }
    })

    // var posicion = datos.findIndex((item) => item.cedula == post.cedula)


    // if (posicion == -1) {
    //     return callback({ state: true, mensaje: "No hay usuarios con esa cedula continua" })
    // } else {
    //     return callback({ state: false, mensaje: "ya existe un usuario con esa cedula " })
    // }

}
usuariosModel.CargarTodas = function(post, callback) {

    Mymodel.find({}, {}, (error, documentos) => {
            if (error) {
                return callback({ state: false, documentos: [], mensaje: error })
            } else {
                return callback({ state: true, documentos: documentos })
            }
        })
        // return callback({ state: true, documentos: datos })
}

usuariosModel.Ingresar = function(post, callback) {

    Mymodel.find({ correo: post.correo, contraseña: post.contraseña }, { contraseña: 0 }, (error, documentos) => {
            if (error) {
                return callback({ state: false, documentos: [], mensaje: error })
            } else {
                return callback({ state: true, documentos: documentos })
            }
        })
        // return callback({ state: true, documentos: datos })
}
usuariosModel.CargarporCedula = function(post, callback) {

    Mymodel.find({ cedula: post.cedula }, {}, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })

    // var posicion = datos.findIndex((item) => item.cedula == post.cedula)
    // return callback({ state: true, datos: datos[posicion] })
}

usuariosModel.ActualizarporCedula = function(post, callback) {

    Mymodel.findOneAndUpdate({ cedula: post.cedula }, {
        nombre: post.nombre,
        apellido: post.apellido,
        edad: post.edad
    }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Usuario Actualizado" })
        }
    })


    // var posicion = datos.findIndex((item) => item.cedula == post.cedula)
    // datos[posicion].nombre = post.nombre
    // datos[posicion].apellido = post.apellido
    // datos[posicion].edad = post.edad
    // return callback({ state: true, mensaje: "Usuario Actualizado" })
}

usuariosModel.EliminarporCedula = function(post, callback) {

    Mymodel.findOneAndDelete({ cedula: post.cedula }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, mensaje: error })
        } else {
            return callback({ state: true, mensaje: "Usuario Eliminado" })
        }
    })

    // var posicion = datos.findIndex((item) => item.cedula == post.cedula)
    // datos.splice(posicion, 1)
    // return callback({ state: true, mensaje: "Usuario Eliminado" })
}


module.exports.usuariosModel = usuariosModel