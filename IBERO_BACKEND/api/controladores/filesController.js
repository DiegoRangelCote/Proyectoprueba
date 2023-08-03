var filesController = {}

filesController.SubirArchivos = function(request, response) {

    var post = {
        carpeta: request.params.carpeta,
        id: request.params.id,
        extensiones: [".png", ".jpeg", ".gif", ".jpg"]
    }

    var upload = multer({
        storage: multer.diskStorage({
            destination: function(req, file, callback) {
                callback(null, appRoot + '/' + post.carpeta)
            },
            filename: function(req, file, callback) {
                // var ext = path.extname(file.originalname)
                callback(null, post.id + '.png')
            }
        }),
        limit: { fileSize: 1048576 },
        fileFilter: function(request, file, callback) {
            console.log(file.originalname)
            var ext = path.extname(file.originalname)
            var existe = post.extensiones.indexOf(ext)

            if (existe < 0) {
                console.log("Permiso Denegado")
                return callback({ state: false, mensaje: "solo soporta los siguientes formatos" + post.extensiones.join(" | ") }, null)
            } else {
                console.log("Permiso Aprobado")
                return callback(null, true)
            }
        }
    }).single("userFile")

    upload(request, response, function(err) {
        if (err) {
            console.log(err)
            response.json(err)
        } else {
            console.log("Ok")
            response.json({ state: true, mensaje: "Archivo Cargado" })
        }
    })

}


filesController.SubirArchivosPdf = function(request, response) {

    var post = {
        carpeta: request.params.carpeta,
        id: request.params.id,
        extensiones: [".pdf", ".docx", ]
    }

    var upload = multer({
        storage: multer.diskStorage({
            destination: function(req, file, callback) {
                callback(null, appRoot + '/' + post.carpeta)
            },
            filename: function(req, file, callback) {
                var ext = path.extname(file.originalname)
                callback(null, post.id + ext)
            }
        }),
        limit: { fileSize: 1048576 },
        fileFilter: function(request, file, callback) {
            console.log(file.originalname)
            var ext = path.extname(file.originalname)
            var existe = post.extensiones.indexOf(ext)

            if (existe < 0) {
                console.log("Permiso Denegado")
                return callback({ state: false, mensaje: "solo soporta los siguientes formatos" + post.extensiones.join(" | ") }, null)
            } else {
                console.log("Permiso Aprobado")
                return callback(null, true)
            }
        }
    }).single("userFile")

    upload(request, response, function(err) {
        if (err) {
            console.log(err)
            response.json(err)
        } else {
            console.log("Ok")
            response.json({ state: true, mensaje: "Archivo Cargado" })
        }
    })

}



module.exports.filesController = filesController