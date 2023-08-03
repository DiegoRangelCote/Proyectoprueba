const mongoose = require('mongoose')
var directorioModel = {}
var datos = []

const Schema = mongoose.Schema;
var directorioSchema = new Schema({

    nombre: String,
    apellido: String,
    cedula: String,
    direccion: String,

})

const Mymodel = mongoose.model("directorio", directorioSchema)


directorioModel.Guardar = function(post, callback) {

    const instancia = new Mymodel

    instancia.nombre = post.nombre
    instancia.apellido = post.apellido
    instancia.cedula = post.cedula
    instancia.direccion = post.direccion



    instancia.save((error, Creado) => {
        if (error) {
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Almacenado" })
        }
    })


}

directorioModel.VerificarCedula = function(post, callback) {


    Mymodel.find({ cedula: post.cedula }, { cedula: 1 }, (error, documentos) => {
        console.log(documentos)
        if (error) {
            return callback({ state: false })
        } else {
            if (documentos.length == 0) {
                return callback({ state: true, mensaje: "No hay datos con esta cedula" })
            } else {
                return callback({ state: false, mensaje: "ya existe un usuario con esta cedula " })
            }
        }
    })

    // var posicion = datos.findIndex((item) => item.cedula == post.cedula)


    // if (posicion == -1) {
    //     return callback({ state: true, mensaje: "No hay directorio con esa cedula continua" })
    // } else {
    //     return callback({ state: false, mensaje: "ya existe un usuario con esa cedula " })
    // }

}

directorioModel.CargarTodas = function(post, callback) {

    Mymodel.find({}, {}, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })

}

directorioModel.CargarporId = function(post, callback) {

    Mymodel.find({ _id: post.Id }, { _v: 0 }, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })


}

directorioModel.ActualizarporId = function(post, callback) {

    Mymodel.findOneAndUpdate({ _id: post.Id }, {
        nombre: post.nombre,
        apellido: post.apellido,
        direccion: post.direccion,


    }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Actualizado" })
        }
    })

}

directorioModel.EliminarporId = function(post, callback) {

    Mymodel.findOneAndDelete({ _id: post.Id }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, mensaje: error })
        } else {
            return callback({ state: true, mensaje: "Dato Eliminado" })
        }
    })

}


module.exports.directorioModel = directorioModel