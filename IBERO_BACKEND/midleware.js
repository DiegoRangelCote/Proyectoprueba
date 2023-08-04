var permisosModel = require('./api/modelos/permisosModel.js').permisosModel
var midleware = {}


midleware.Acceso = function(request, response, next) {
    console.log(request.url)
    var post = {
        ruta: request.url,
        rol: request.session.rol
    }

    console.log(post)

    permisosModel.VerificarAcceso(post, function(respuesta) {
        if (respuesta.state == false) {
            response.json(respuesta)
        } else {
            next()
        }
    })
}


module.exports.midleware = midleware