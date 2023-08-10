import { Component } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { SubirarchivosService } from 'src/app/servicios/subirarchivos.service';

declare var $:any

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent {
  constructor(private peticion:PeticionService, private msg:MensajesService, private subirarchivos:SubirarchivosService){}

  ngOnInit(): void {
    this.CargarTodas()
  }


item:any = {
  destino: this.subirarchivos.baseUrl,
  path: ""
}

nombre:String = ""
apellido:String = ""
cedula:String = ""
Idseleccionado:String = ""
datos:any[] = []

nuevo(){
  
  this.nombre = ""
  this.apellido = ""
  this.cedula = ""
  this.Idseleccionado = ""
  $('#exampleModal').modal('show')
}

CargarTodas(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Documentos/CargarTodas",
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

  this.item.path = "/filesPdf/archivos/" + id

  let data = {
    host:this.peticion.urlLocal,
    path:"/Documentos/CargarporId",
    payload:{
      Id:id
    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      
      if(res.state = true){
        console.log(res.state)
        this.nombre = res.documentos[0].nombre
        this.apellido = res.documentos[0].apellido
        this.cedula = res.documentos[0].cedula
        this.Idseleccionado = res.documentos[0]._id
        $('#exampleModal').modal('show')
      }
     
    }
  )

  
  
}

Actualizar(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Documentos/ActualizarporId",
    payload:{
    
      cedula:this.cedula,
      nombre:this.nombre,
      apellido:this.apellido,
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
    path:"/Documentos/Guardar",
    payload:{
      nombre:this.nombre,
      apellido:this.apellido,
      cedula:this.cedula.toString()
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
    path:"/Documentos/EliminarporId",
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
