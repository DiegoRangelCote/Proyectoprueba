const mongoose = require('mongoose')

var midleware = {}
const Schema = mongoose.Schema;
var PermisosSchema = new Schema({
    rol_id: Number,
    ruta: String,
    estado: Number,


})

const Mymodel = mongoose.model("permisos", PermisosSchema)

midleware.Acceso = function(request,response,next) {
    console.log(request.url)
    var post = {
        ruta: request.url,
        rol: request.session.rol
    }

    Mymodel.find({ ruta: post.ruta,rol_id: post.rol},{estado: 1 }, (error, documentos) => {
        if (error) {
            response.json({state:false,mensaje:"Error en el Midleware"})
        } else {
            if (documentos.length == 0) {
                response.json({state: false,mensaje:"Este permiso No Existe"})
            } else {
                if (documentos[0].estado == 0) {
                    response.json({ state: false, mensaje: "No tiene Acceso" })
                } else {
                    next()
                }
            }

        }
    })
}


module.exports.midleware = midleware