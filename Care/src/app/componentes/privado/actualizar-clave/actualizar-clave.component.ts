import { Component } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var $:any

@Component({
  selector: 'app-actualizar-clave',
  templateUrl: './actualizar-clave.component.html',
  styleUrls: ['./actualizar-clave.component.css']
})


export class ActualizarClaveComponent {

  constructor(private peticion:PeticionService, private msg:MensajesService){}

  ngOnInit(): void {
    this.CargarTodas()
  }

  cedula:String = ""
  contrasena:String = ""
  datos:any [] = []

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
        this.contrasena = res.documentos[0].contrasena
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
        contrasena:this.contrasena.toString()
        
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




}
