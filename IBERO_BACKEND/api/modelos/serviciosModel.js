const mongoose = require('mongoose')
var serviciosModel = {}
var datos = []

const Schema = mongoose.Schema;
var serviciosSchema = new Schema({
    codigo: String,
    servicio: String,
    descripcion: String,

})

const Mymodel = mongoose.model("servicios", serviciosSchema)


serviciosModel.Guardar = function(post, callback) {

    const instancia = new Mymodel
    instancia.codigo = post.codigo
    instancia.servicio = post.servicio
    instancia.descripcion = post.descripcion

    instancia.save((error, Creado) => {
        if (error) {
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Almacenado" })
        }
    })


}

serviciosModel.VerificarCodigo = function(post, callback) {


    Mymodel.find({ codigo: post.codigo }, { codigo: 1 }, (error, documentos) => {
        console.log(documentos)
        if (error) {
            return callback({ state: false })
        } else {
            if (documentos.length == 0) {
                return callback({ state: true, mensaje: "No hay datos con este codigo" })
            } else {
                return callback({ state: false, mensaje: "ya existe un servicio con este codigo " })
            }
        }
    })

    // var posicion = datos.findIndex((item) => item.cedula == post.cedula)


    // if (posicion == -1) {
    //     return callback({ state: true, mensaje: "No hay servicios con esa cedula continua" })
    // } else {
    //     return callback({ state: false, mensaje: "ya existe un usuario con esa cedula " })
    // }

}

serviciosModel.CargarTodas = function(post, callback) {

    Mymodel.find({}, {}, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })

}

serviciosModel.CargarporId = function(post, callback) {

    Mymodel.find({ _id: post.Id }, { _v: 0 }, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })


}

serviciosModel.ActualizarporId = function(post, callback) {

    Mymodel.findOneAndUpdate({ _id: post.Id }, {
        codigo: post.codigo,
        servicio: post.servicio,
        descripcion: post.descripcion,


    }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Actualizado" })
        }
    })

}

serviciosModel.EliminarporId = function(post, callback) {

    Mymodel.findOneAndDelete({ _id: post.Id }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, mensaje: error })
        } else {
            return callback({ state: true, mensaje: "Dato Eliminado" })
        }
    })

}


module.exports.serviciosModel = serviciosModel