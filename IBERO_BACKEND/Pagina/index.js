var Mensajes = function(tipo, mensaje) {
    var mismensajes = document.getElementById("mensajes")
    mismensajes.innerHTML = mismensajes.innerHTML + `<div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
    <strong>Hola! </strong>${mensaje}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
</div>`
}

var Peticion = function(url, data, callback) {

    var data = data
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            var respuesta = JSON.parse(this.responseText)
            return callback(respuesta)
        }
    });

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}

var CargarTodas = function() {
    var post = {
        url: "http://localhost:3000/Usuarios/CargarTodas",
        data: ""
    }

    Peticion(post.url, post.data, function(respuesta) {

        var datosregistrados = document.getElementById("datosregistrados")
        datosregistrados.innerHTML = ""
        for (let a = 0; a < respuesta.documentos.length; a++) {

            datosregistrados.innerHTML = datosregistrados.innerHTML + `<tr>
    <td onclick="EditarCedula(${respuesta.documentos[a].cedula})" >${respuesta.documentos[a].cedula}</td>
    <td>${respuesta.documentos[a].nombre}</td>
    <td>${respuesta.documentos[a].apellido}</td>
    <td>${respuesta.documentos[a].edad}</td>
    </tr>`
        }
    })
}

var Limpiar = function() {
    document.getElementById("cedula").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("edad").value = ""
}
var Nuevo = function() {
    Limpiar()
    $('#exampleModal').modal('show')
    $('#btnactualizar').hide()
    $('#btnguardar').show()
    $('#btneliminar').hide()
    $('#cedula').prop(disabled, false);

}
var Guardar = function() {
    var cedula = document.getElementById("cedula").value
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var edad = document.getElementById("edad").value


    var post = {
        url: "http://localhost:3000/Usuarios/Guardar",
        data: `nombre=${nombre}&cedula=${cedula}&apellido=${apellido}&edad=${edad}`
    }

    Peticion(post.url, post.data, function(respuesta) {
        if (respuesta.state == true) {
            Mensajes("success", respuesta.mensaje)
            $('#exampleModal').modal('hide')
            CargarTodas()
            Limpiar()

        } else {
            Mensajes("danger", respuesta.mensaje)
        }
    })


}

var EditarCedula = function(cedula) {
    var post = {
        url: "http://localhost:3000/Usuarios/CargarporCedula",
        data: `cedula=${cedula}`
    }

    Peticion(post.url, post.data, function(respuesta) {
        $('#exampleModal').modal('show')
        $('#btnactualizar').show()
        $('#btnguardar').hide()
        $('#btneliminar').show()
        $('#cedula').prop(disabled, true);

        console.log(respuesta)
        document.getElementById("cedula").value = respuesta.documentos[0].cedula
        document.getElementById("nombre").value = respuesta.documentos[0].nombre
        document.getElementById("apellido").value = respuesta.documentos[0].apellido
        document.getElementById("edad").value = respuesta.documentos[0].edad
    })


}

var ActualizarporCedula = function() {
    var cedula = document.getElementById("cedula").value
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var edad = document.getElementById("edad").value


    var post = {
        url: "http://localhost:3000/Usuarios/ActualizarporCedula",
        data: `nombre=${nombre}&cedula=${cedula}&apellido=${apellido}&edad=${edad}`
    }

    Peticion(post.url, post.data, function(respuesta) {
        if (respuesta.state == true) {
            Mensajes("success", respuesta.mensaje)
            $('#exampleModal').modal('hide')
            CargarTodas()
            Limpiar()

        } else {
            Mensajes("danger", respuesta.mensaje)
        }
    })
}

var EliminarporCedula = function() {
    var cedula = document.getElementById("cedula").value
    var post = {
        url: "http://localhost:3000/Usuarios/EliminarporCedula",
        data: `cedula=${cedula}`
    }

    Peticion(post.url, post.data, function(respuesta) {
        if (respuesta.state == true) {
            Mensajes("success", respuesta.mensaje)
            $('#exampleModal').modal('hide')
            CargarTodas()
            Limpiar()

        } else {
            Mensajes("danger", respuesta.mensaje)
        }
    })
}

CargarTodas()