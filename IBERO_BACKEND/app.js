const express = require("express")
global.app = express()
global.config = require("./config.js").config
const mongoose = require('mongoose')

var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cors = require('cors')
app.use(cors({
    origin: "http://localhost:4200",
<<<<<<< HEAD
    methods: ["GET", "POST", "PUT", "DELETE", "PATH"]
=======
    methods: ["GET","POST","PUT","DELETE"]
>>>>>>> a649261194d0b3b195b0cb56c52a6cb7d7e80bf9
}))

var session = require('express-session')({
    secret: config.clavesesion,
    resave: true,
    saveUninitialized: true,
    cookie: { path: "/", httpOnly: true, maxAge: 40000 },
    name: "MiappCookie",
    rolling: true
})

app.use(session)

require("./routes.js")

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/" + config.bd, { useNewUrlParser: true, useUnifiedTopology: true }, (error, respuesta) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Conexion correcta al servidor mongo")
    }
})



app.use("/", express.static(__dirname + '/Pagina'))


app.listen(config.puerto, function() {
    console.log("servidor funcionando por el puerto" + config.puerto)
})