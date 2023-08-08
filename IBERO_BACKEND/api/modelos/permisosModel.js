const mongoose = require('mongoose')
var permisosModel = {}


const Schema = mongoose.Schema;
var permisosSchema = new Schema({
    ruta: String,
    estado: String,
    rol_id: Number//esta String lo pasamos a Number

})

const Mymodel = mongoose.model("permisos", permisosSchema)


permisosModel.Guardar = function(post, callback) {

    const instancia = new Mymodel
    instancia.ruta = post.ruta
    instancia.estado = post.estado
    instancia.rol_id = post.rol_id

    instancia.save((error, Creado) => {
        if (error) {
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Almacenado" })
        }
    })


}

permisosModel.CargarTodas = function(post, callback) {

    Mymodel.find({}, {}, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })

}

permisosModel.CargarporId = function(post, callback) {

    Mymodel.find({ _id: post.Id }, { _v: 0 }, (error, documentos) => {
        if (error) {
            return callback({ state: false, documentos: [], mensaje: error })
        } else {
            return callback({ state: true, documentos: documentos })
        }
    })


}

permisosModel.ActualizarporId = function(post, callback) {

    Mymodel.findOneAndUpdate({ _id: post.Id }, {
        ruta: post.ruta,
        estado: post.estado,
        rol_id: post.rol_id


    }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, error: error })
        } else {
            return callback({ state: true, mensaje: "Dato Actualizado" })
        }
    })

}

permisosModel.EliminarporId = function(post, callback) {

    Mymodel.findOneAndDelete({ _id: post.Id }, (error, documentos) => {
        if (error) {
            console.log(error)
            return callback({ state: false, mensaje: error })
        } else {
            return callback({ state: true, mensaje: "Dato Eliminado" })
        }
    })

}

permisosModel.VerificarAcceso = function(post, callback) {
    Mymodel.find({ ruta: post.ruta, rol_id: post.rol }, { estado: 1 }, (error, documentos) => {
        if (error) {
            return callback({ state: false, mensaje: "Error en el Midleware" })
        } else {
            if (documentos.length == 0) {
                return callback({ state: false, mensaje: "Este permiso No Existe" })
            } else {
                if (documentos[0].estado == 0) {
                    return callback({ state: false, mensaje: "No tiene Acceso" })
                } else {
                    return callback({ state: true })
                }
            }

        }
    })
}

module.exports.permisosModel = permisosModel