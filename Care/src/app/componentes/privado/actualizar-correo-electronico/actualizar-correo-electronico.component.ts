import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any

@Component({
  selector: 'app-actualizar-correo-electronico',
  templateUrl: './actualizar-correo-electronico.component.html',
  styleUrls: ['./actualizar-correo-electronico.component.css']
})
export class ActualizarCorreoElectronicoComponent {

  
  constructor(private peticion:PeticionService, private msg:MensajesService){}

  ngOnInit(): void {
    this.CargarTodas()
  }

  cedula:String = ""
  correo:String = ""

  datos:any [] = []

  nuevo(){

    this.cedula = ""
    this.correo = ""
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

    this.cedula = res.documentos[0].cedula
    this.correo = res.documentos[0].correo
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
    cedula:this.cedula.toString(),
    correo:this.correo.toString(),
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
    
    cedula:this.cedula.toString(),
    correo:this.correo,
    
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
      correo:this.correo.toString(),
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
