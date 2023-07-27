const mongoose = require('mongoose')
var pacientesModel = {}
var datos = []

const Schema = mongoose.Schema;
var pacientesSchema = new Schema({
    fecha: String,
    nombre: String,
    apellido: String,
    cedula: String,
    contacto: String,
    medicamento: String,

})

const Mymodel = mongoose.model("pacientes", pacientesSchema)


pacientesModel.Guardar = function(post, callback) {

    const instancia = new Mymodel

    instancia.fecha = post.fecha
    instancia.nombre = post.nombre
    instancia.apellido = post.apellido
    instancia.cedula = post.cedula
    instancia.contacto = post.contacto
    instancia.medicamento = post.medicamento



    instancia.save((error, Creado) => {
        if (error) {
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Almacenado" })
        }
    })


}

pacientesModel.VerificarCedula = function(post, callback) {


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
    //     return callback({ state: true, mensaje: "No hay pacientes con esa cedula continua" })
    // } else {
    //     return callback({ state: false, mensaje: "ya existe un usuario con esa cedula " })
    // }

}

pacientesModel.CargarTodas = function(post, callback) {

    Mymodel.find({}, {}, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })

}

pacientesModel.CargarporId = function(post, callback) {

    Mymodel.find({ _id: post.Id }, { _v: 0 }, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })


}

pacientesModel.ActualizarporId = function(post, callback) {

    Mymodel.findOneAndUpdate({ _id: post.Id }, {
        nombre: post.nombre,
        apellido: post.apellido,
        contacto: post.contacto,
        medicamento: post.medicamento,

    }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Actualizado" })
        }
    })

}

pacientesModel.EliminarporId = function(post, callback) {

    Mymodel.findOneAndDelete({ _id: post.Id }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, mensaje: error })
        } else {
            return callback({ state: true, mensaje: "Dato Eliminado" })
        }
    })

}


module.exports.pacientesModel = pacientesModel