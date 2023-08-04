import { Component } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent {


  constructor(private peticion:PeticionService, private msg:MensajesService){}

  ngOnInit(): void {
    this.CargarTodas()
  }


nombre:String = ""
apellido:String = ""
cedula:String = ""
direccion:String = ""
Idseleccionado:String = ""
datos:any[] = []

nuevo(){
  
  this.nombre = ""
  this.apellido = ""
  this.cedula = ""
  this.direccion = ""
  this.Idseleccionado = ""
  $('#exampleModal').modal('show')
}

CargarTodas(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Directorio/CargarTodas",
    payload:{
    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      
      this.datos = res.documentos
     
    }
  )

}

CargarId(id:string){
  console.log(id)
  let data = {
    host:this.peticion.urlLocal,
    path:"/Directorio/CargarporId",
    payload:{
      Id:id.toString()
    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      
      if(res.state = true){
        
        this.nombre = res.documentos[0].nombre
        this.apellido = res.documentos[0].apellido
        this.cedula = res.documentos[0].cedula
        this.direccion = res.documentos[0].direccion
        this.Idseleccionado = res.documentos[0]._id
        $('#exampleModal').modal('show')
      }
     
    }
  )

  
  
}

Actualizar(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Directorio/ActualizarporId",
    payload:{
      
      nombre:this.nombre,
      apellido:this.apellido,
      direccion:this.direccion,
      Id:this.Idseleccionado
    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      
      if(res.state = true){
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
    path:"/Directorio/Guardar",
    payload:{
      nombre:this.nombre,
      apellido:this.apellido,
      cedula:this.cedula.toString(),
      direccion:this.direccion.toString(),
      
    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      
      if(res.state = true){
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
    path:"/Directorio/EliminarporId",
    payload:{
      Id:this.Idseleccionado.toString(),
      
    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      
      if(res.state = true){
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

}


