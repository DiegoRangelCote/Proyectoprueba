import { Component } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent {
  constructor(private peticion:PeticionService, private msg:MensajesService){}

  ngOnInit(): void {
    this.CargarTodas()
  }

codigo:String = ""
medicamento:String = ""
cantidad:String = ""
precio:String = ""
Idseleccionado:String = ""
datos:any[] = []

nuevo(){
  this.codigo = ""
  this.medicamento = ""
  this.cantidad = ""
  this.precio = ""
  this.Idseleccionado = ""
  $('#exampleModal').modal('show')
}

CargarTodas(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Medicamentos/CargarTodas",
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
    path:"/Medicamentos/CargarporId",
    payload:{ 
      Id:id.toString()
    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      
      if(res.state = true){
        this.codigo = res.documentos[0].codigo
        this.medicamento = res.documentos[0].medicamento
        this.cantidad = res.documentos[0].cantidad
        this.precio = res.documentos[0].precio
        this.Idseleccionado = res.documentos[0]._id
        $('#exampleModal').modal('show')
      }
     
    }
  )

  
  
}

Actualizar(){
  let data = {
    host:this.peticion.urlLocal,
    path:"/Medicamentos/ActualizarporId",
    payload:{
      medicamento:this.medicamento,
      cantidad:this.cantidad,
      precio:this.precio,
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
    path:"/Medicamentos/Guardar",
    payload:{
      codigo:this.codigo.toString(),
      medicamento:this.medicamento,
      cantidad:this.cantidad.toString(),
      precio:this.precio.toString(),
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
    path:"/Medicamentos/EliminarporId",
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
