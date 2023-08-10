const mongoose = require('mongoose')
var documentosModel = {}
var datos = []

const Schema = mongoose.Schema;
var documentosSchema = new Schema({
    cedula: String,
    nombre: String,
    apellido: String


})

const Mymodel = mongoose.model("documentos", documentosSchema)


documentosModel.Guardar = function(post, callback) {

    const instancia = new Mymodel

    instancia.cedula = post.cedula
    instancia.nombre = post.nombre
    instancia.apellido = post.apellido



    instancia.save((error, Creado) => {
        if (error) {
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Almacenado" })
        }
    })


}

documentosModel.VerificarCedula = function(post, callback) {


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
    //     return callback({ state: true, mensaje: "No hay documentos con esa cedula continua" })
    // } else {
    //     return callback({ state: false, mensaje: "ya existe un usuario con esa cedula " })
    // }

}

documentosModel.CargarTodas = function(post, callback) {

    Mymodel.find({}, {}, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })

}

documentosModel.CargarporId = function(post, callback) {

    //cambiar por cedula
    Mymodel.find({ _id: post.Id }, { _v: 0 }, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })


}

documentosModel.ActualizarporId = function(post, callback) {

    Mymodel.findOneAndUpdate({ _id: post.Id }, {
        nombre: post.nombre,
        apellido: post.apellido,
        cedula: post.cedula,



    }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Actualizado" })
        }
    })

}

documentosModel.EliminarporId = function(post, callback) {

    Mymodel.findOneAndDelete({ _id: post.Id }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, mensaje: error })
        } else {
            return callback({ state: true, mensaje: "Dato Eliminado" })
        }
    })

}


module.exports.documentosModel = documentosModel