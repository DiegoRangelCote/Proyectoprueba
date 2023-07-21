import { Component } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private peticion:PeticionService, private msg:MensajesService){}

nombre:String =""
apellido:String =""
cedula:String =""
edad:Number = 0
correo:String =""
contrasena:String =""
direccion:String =""
ciudad:String =""
departamento:String =""
telefono:String =""


Registrar(){

  let data = {
    host:this.peticion.urlLocal,
    path:"/Usuarios/Guardar",
    payload:{
      cedula:this.cedula,
      nombre:this.nombre,
      apellido:this.apellido,
      edad:this.edad,
      correo:this.correo,
      contrasena:this.contrasena,
      

    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      console.log(res)
      if(res.state == true){
        this.msg.Load(res.mensaje,"success")
      }
      else{
        this.msg.Load(res.mensaje,"danger")
      }
    }
  )
}

}
