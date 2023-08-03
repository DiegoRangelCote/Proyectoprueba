var usuariosController = require("./api/controladores/usuariosController.js").usuariosController
var pacientesController = require("./api/controladores/pacientesController.js").pacientesController
var serviciosController = require("./api/controladores/serviciosController.js").serviciosController
var permisosController = require("./api/controladores/permisosController.js").permisosController
var documentosController = require("./api/controladores/documentosController.js").documentosController
var directorioController = require("./api/controladores/directorioController.js").directorioController
var mdl = require('./midleware.js').midleware


app.post("/Usuarios/Guardar", mdl.Acceso, function(request, response) {
    usuariosController.Guardar(request, response)
})

app.post("/Usuarios/CargarTodas", function(request, response) {
    usuariosController.CargarTodas(request, response)
})

app.post("/Usuarios/CargarporCedula", function(request, response) {
    usuariosController.CargarporCedula(request, response)
})
app.post("/Usuarios/ActualizarporCedula", function(request, response) {
    usuariosController.ActualizarporCedula(request, response)
})

app.post("/Usuarios/ActualizarcontrasenaporCedula", function(request, response) {
    usuariosController.ActualizarcontrasenaporCedula(request, response)
})

app.post("/Usuarios/EliminarporCedula", function(request, response) {
    usuariosController.EliminarporCedula(request, response)
})

app.post("/Usuarios/Ingresar", function(request, response) {
    usuariosController.Ingresar(request, response)
})

app.post("/Usuarios/Cerrarsesion", function(request, response) {
    request.session.destroy()
    response.json({ state: true, mensaje: "Sesion Cerrada" })
})





app.post("/Pacientes/Guardar", function(request, response) {
    pacientesController.Guardar(request, response)
})

app.post("/Pacientes/CargarTodas", function(request, response) {
    pacientesController.CargarTodas(request, response)
})

app.post("/Pacientes/CargarporId", function(request, response) {
    pacientesController.CargarporId(request, response)
})
app.post("/Pacientes/ActualizarporId", function(request, response) {
    pacientesController.ActualizarporId(request, response)
})

app.post("/Pacientes/EliminarporId", function(request, response) {
    pacientesController.EliminarporId(request, response)
})







app.post("/Servicios/Guardar", function(request, response) {
    serviciosController.Guardar(request, response)
})

app.post("/Servicios/CargarTodas", function(request, response) {
    serviciosController.CargarTodas(request, response)
})

app.post("/Servicios/CargarporId", function(request, response) {
    serviciosController.CargarporId(request, response)
})
app.post("/Servicios/ActualizarporId", function(request, response) {
    serviciosController.ActualizarporId(request, response)
})

app.post("/Servicios/EliminarporId", function(request, response) {
    serviciosController.EliminarporId(request, response)
})



app.post("/Permisos/Guardar", function(request, response) {
    permisosController.Guardar(request, response)
})

app.post("/Permisos/CargarTodas", function(request, response) {
    permisosController.CargarTodas(request, response)
})

app.post("/Permisos/CargarporId", function(request, response) {
    permisosController.CargarporId(request, response)
})
app.post("/Permisos/ActualizarporId", function(request, response) {
    permisosController.ActualizarporId(request, response)
})

app.post("/Permisos/EliminarporId", function(request, response) {
    permisosController.EliminarporId(request, response)
})

app.post("/Permisos/Guardar", function(request, response) {
    permisosController.Guardar(request, response)
})



app.post("/Directorio/Guardar", function(request, response) {
    directorioController.Guardar(request, response)
})

app.post("/Directorio/CargarTodas", function(request, response) {
    directorioController.CargarTodas(request, response)
})

app.post("/Directorio/CargarporId", function(request, response) {
    directorioController.CargarporId(request, response)
})
app.post("/Directorio/ActualizarporId", function(request, response) {
    directorioController.ActualizarporId(request, response)
})

app.post("/Directorio/EliminarporId", function(request, response) {
    directorioController.EliminarporId(request, response)
})









app.post("/Documentos/Guardar", function(request, response) {
    documentosController.Guardar(request, response)
})

app.post("/Documentos/CargarTodas", function(request, response) {
    documentosController.CargarTodas(request, response)
})

app.post("/Documentos/CargarporId", function(request, response) {
    documentosController.CargarporId(request, response)
})
app.post("/Documentos/ActualizarporId", function(request, response) {
    documentosController.ActualizarporId(request, response)
})

app.post("/Documentos/EliminarporId", function(request, response) {
    documentosController.EliminarporId(request, response)
})






var filesController = require("./api/controladores/filesController.js").filesController

app.post('/files/:carpeta:id', function(request, response) {
    filesController.SubirArchivos(resquest, response)
})

app.post('/filesPdf/:carpeta:id', function(request, response) {
    filesController.SubirArchivosPdf(resquest, response)
})

app.post('/status', function(request, response) {
    response.json(request.session)
})