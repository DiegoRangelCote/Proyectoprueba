var usuariosController = require("./api/controladores/usuariosController.js").usuariosController
var mdl = require('./midleware.js').midleware



app.post("/Usuarios/Guardar", function(request, response) {

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