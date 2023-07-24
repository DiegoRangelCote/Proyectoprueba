var usuariosController = require("./api/controladores/usuariosController.js").usuariosController
var pacientesController = require("./api/controladores/pacientesController.js").pacientesController
var medicamentosController = require("./api/controladores/medicamentosController.js").medicamentosController
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







app.post("/Medicamentos/Guardar", function(request, response) {
    medicamentosController.Guardar(request, response)
})

app.post("/Medicamentos/CargarTodas", function(request, response) {
    medicamentosController.CargarTodas(request, response)
})

app.post("/Medicamentos/CargarporId", function(request, response) {
    medicamentosController.CargarporId(request, response)
})
app.post("/Medicamentos/ActualizarporId", function(request, response) {
    medicamentosController.ActualizarporId(request, response)
})

app.post("/Medicamentos/EliminarporId", function(request, response) {
    medicamentosController.EliminarporId(request, response)
})