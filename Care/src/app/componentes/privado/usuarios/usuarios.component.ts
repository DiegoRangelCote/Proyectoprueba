import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private peticion:PeticionService, private msg:MensajesService){}

  ngOnInit(): void {
    this.CargarTodas()
  }

  nombre:String = ""
  apellido:String = ""
  cedula:String = ""
  edad:String = ""
  correo:String = ""
  contrasena:String = ""
  direccion:String = ""
  ciudad:String = ""
  departamento:String = ""
  telefono:String = ""
  IdSeleccionado: String = ""
  datos:any [] = []

  nuevo(){
    this.nombre = ""
    this.apellido = ""
    this.cedula = ""
    this.edad = ""
    this.correo = ""
    this.contrasena = ""
    this.direccion = ""
    this.ciudad = ""
    this.departamento = ""
    this.telefono = ""
    this.IdSeleccionado = ""
    $('#exampleModal').modal('show')
  }

  CargarTodas(){

    let data = {
      host:this.peticion.urlLocal,
      path:"/Usuarios/CargarTodas",
      payload:{
  
      }
    }
  
    this.peticion.Post(data.host + data.path,data.payload).then(
      (res:any)=>{
        
        this.datos = res.documentos
      
      }
    )
}

CargarId(cedula:String){
console.log(cedula)

let data = {
  host:this.peticion.urlLocal,
  path:"/Usuarios/CargarporCedula",
  payload:{
  cedula:cedula.toString()
  }
}

this.peticion.Post(data.host + data.path,data.payload).then(
  (res:any)=>{
    
    if(res.state == true){
    this.nombre = res.documentos[0].nombre
    this.apellido = res.documentos[0].apellido
    this.cedula = res.documentos[0].cedula
    this.edad = res.documentos[0].edad
    this.correo = res.documentos[0].correo
    this.contrasena = res.documentos[0].contrasena
    this.direccion = res.documentos[0].direccion
    this.ciudad = res.documentos[0].ciudad
    this.departamento = res.documentos[0].departamento
    this.telefono = res.documentos[0].telefono
    this.IdSeleccionado = res.documentos[0]._id
    $('#exampleModal').modal('show')
    }
  }
)



}

Actualizar(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Usuarios/ActualizarporCedula",
    payload:{
    nombre:this.nombre,
    apellido:this.apellido,
    cedula:this.cedula.toString(),
    edad:this.edad,
    direccion:this.direccion,
    ciudad:this.ciudad,
    departamento:this.departamento,
    telefono:this.telefono,
    }
  }
  
  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{

      if(res.state == true){
        this.msg.Load(res.mensaje,"success")
        $('#exampleModal').modal('hide')
        this.CargarTodas()
      }
      else{
        this.msg.Load(res.mensaje,"danger")
      }
}

)
}

Guardar(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Usuarios/Guardar",
    payload:{
    nombre:this.nombre,
    apellido:this.apellido,
    cedula:this.cedula.toString(),
    edad:this.edad,
    correo:this.correo,
    contrasena:this.contrasena,
    direccion:this.direccion,
    ciudad:this.ciudad,
    departamento:this.departamento,
    telefono:this.telefono,
    }
  }
  
  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{

      if(res.state == true){
        this.msg.Load(res.mensaje,"success")
        $('#exampleModal').modal('hide')
        this.CargarTodas()
      }
      else{
        this.msg.Load(res.mensaje,"danger")
      }
}

)
}

Eliminar(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Usuarios/EliminarporCedula",
    payload:{
    cedula:this.cedula.toString(),
    
    }
  }
  
  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{

      if(res.state == true){
        this.msg.Load(res.mensaje,"success")
        $('#exampleModal').modal('hide')
        this.CargarTodas()
      }
      else{
        this.msg.Load(res.mensaje,"danger")
      }
}

)
}

ActualizarContrasena(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Usuarios/ActualizarcontrasenaporCedula",
    payload:{
      cedula:this.cedula.toString(),
      contrasena:this.contrasena,
    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      
      if(res.state = true){
       this.msg.Load(res.mensaje,"success")
       
      }
      else{
        this.msg.Load(res.mensaje,"danger")
      }
     
    }
  )
}
}