const session = require('express-session');
const mongoose=require('mongoose')//agregamos esta linea
var midleware = {}
const Schema=mongoose.Schema;//agregamos esta linea
var PermisoSchema=new Schema({//agregamos esta linea

    rol_id:Number,//agregamos esta linea
    ruta:String,//agregamos esta linea
    estado:Number,//agregamos esta linea


})//agregamos esta linea
var permisosModel = require('./api/modelos/permisosModel.js').permisosModel


const Mymodel=mongoose.model("permiso",PermisoSchema)


midleware.Acceso = function(request, response, next) {
    console.log(request.url)
    var post = {
        ruta: request.url,
        rol: request.session.rol_id,
        correo: request.session.correo,
        contrasena:request.session.contrasena
        
    }

    console.log(post)
//agregamos esta lineas hacia bajo
    Mymodel.find({ruta:post.ruta,rol_id:post.rol},{estado:1},(error,documentos)=>{
       console.log(documentos.length)
       console.log("hemos avanzado")
        if(error){
            response.json({state:false,mensaje:"Error en el Midleware"})
        }
        else{
            if(documentos.length==0){
                response.json({state:false,mensaje:"Este Permiso No Existe"})
            }
            else{
                if(documentos[0].estado ==0){
                    response.json({state:false,mensaje:"No tienes Acceso"})
                }
                console.log("hemos avanzado")
            }

        }



    })
//hasta este punto
    /*permisosModel.VerificarAcceso(post, function(respuesta) {
        if (respuesta.state == false) {
            response.json(respuesta)
        } else {
            next()
        }
    })*/
}


module.exports.midleware = midleware