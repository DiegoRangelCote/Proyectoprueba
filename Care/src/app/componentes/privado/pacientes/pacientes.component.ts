import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit{

  constructor(private peticion:PeticionService, private msg:MensajesService){}

  ngOnInit(): void {
    this.CargarTodas()
  }

fecha:String = ""
nombre:String = ""
apellido:String = ""
cedula:String = ""
contacto:String = ""
medicamento:String = ""
contrasena:String = ""
Idseleccionado:String = ""
datos:any[] = []

nuevo(){
  this.fecha = ""
  this.nombre = ""
  this.apellido = ""
  this.cedula = ""
  this.contacto = ""
  this.medicamento = ""
  this.Idseleccionado = ""
  $('#exampleModal').modal('show')
}

CargarTodas(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Pacientes/CargarTodas",
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
    path:"/Pacientes/CargarporId",
    payload:{
      Id:id.toString()
    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      
      if(res.state = true){
        this.fecha = res.documentos[0].fecha
        this.nombre = res.documentos[0].nombre
        this.apellido = res.documentos[0].apellido
        this.cedula = res.documentos[0].cedula
        this.contacto = res.documentos[0].contacto
        this.medicamento = res.documentos[0].medicamento
        this.Idseleccionado = res.documentos[0]._id
        $('#exampleModal').modal('show')
      }
     
    }
  )

  
  
}

Actualizar(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Pacientes/ActualizarporId",
    payload:{
      fecha:this.fecha,
      nombre:this.nombre,
      apellido:this.apellido,
      contacto:this.contacto,
      medicamento:this.medicamento,
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
    path:"/Pacientes/Guardar",
    payload:{
      fecha:this.fecha.toString(),
      nombre:this.nombre,
      apellido:this.apellido,
      cedula:this.cedula.toString(),
      contacto:this.contacto.toString(),
      medicamento:this.medicamento
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
    path:"/Pacientes/EliminarporId",
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
