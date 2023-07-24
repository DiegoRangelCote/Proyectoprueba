const mongoose = require('mongoose')
var medicamentosModel = {}
var datos = []

const Schema = mongoose.Schema;
var medicamentosSchema = new Schema({
    codigo: String,
    medicamento: String,

})

const Mymodel = mongoose.model("medicamentos", medicamentosSchema)


medicamentosModel.Guardar = function(post, callback) {

    const instancia = new Mymodel

    instancia.codigo = post.codigo
    instancia.nombre = post.nombre



    instancia.save((error, Creado) => {
        if (error) {
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Almacenado" })
        }
    })


}

medicamentosModel.VerificarCodigo = function(post, callback) {


    Mymodel.find({ codigo: post.codigo }, { codigo: 1 }, (error, documentos) => {
        console.log(documentos)
        if (error) {
            return callback({ state: false })
        } else {
            if (documentos.length == 0) {
                return callback({ state: true, mensaje: "No hay datos con este codigo" })
            } else {
                return callback({ state: false, mensaje: "ya existe un codigo con este valor " })
            }
        }
    })

    // var posicion = datos.findIndex((item) => item.cedula == post.cedula)


    // if (posicion == -1) {
    //     return callback({ state: true, mensaje: "No hay medicamentos con esa cedula continua" })
    // } else {
    //     return callback({ state: false, mensaje: "ya existe un usuario con esa cedula " })
    // }

}
medicamentosModel.CargarTodas = function(post, callback) {

    Mymodel.find({}, {}, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })

}

medicamentosModel.CargarporId = function(post, callback) {

    Mymodel.find({ _id: post.Id }, { _v: 0 }, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })


}

medicamentosModel.ActualizarporId = function(post, callback) {

    Mymodel.findOneAndUpdate({ _id: post.Id }, {
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

medicamentosModel.EliminarporId = function(post, callback) {

    Mymodel.findOneAndDelete({ _id: post.Id }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, mensaje: error })
        } else {
            return callback({ state: true, mensaje: "Dato Eliminado" })
        }
    })

}


module.exports.medicamentosModel = medicamentosModel