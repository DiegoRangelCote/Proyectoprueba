import { Component } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  constructor(private peticion:PeticionService, private msg:MensajesService){}

  ngOnInit(): void {
    this.CargarTodas()
  }

codigo:String = ""
servicio:String = ""
descripcion:String = ""
Idseleccionado:String = ""
datos:any[] = []

nuevo(){
  this.codigo = ""
  this.servicio = ""
  this.descripcion = ""
  this.Idseleccionado = ""
  $('#exampleModal').modal('show')
}

CargarTodas(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Servicios/CargarTodas",
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
    path:"/Servicios/CargarporId",
    payload:{
      Id:id.toString()
    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      
      if(res.state = true){
        this.codigo = res.documentos[0].codigo
        this.servicio = res.documentos[0].servicio
        this.descripcion = res.documentos[0].descripcion
        this.Idseleccionado = res.documentos[0]._id
        $('#exampleModal').modal('show')
      }
     
    }
  )

  
  
}

Actualizar(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Servicios/ActualizarporId",
    payload:{
      codigo:this.codigo,
      servicio:this.servicio,
      descripcion:this.descripcion,
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
    path:"/Servicios/Guardar",
    payload:{
      codigo:this.codigo.toString(),
      servicio:this.servicio,
      descripcion:this.descripcion

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
    path:"/Servicios/EliminarporId",
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
