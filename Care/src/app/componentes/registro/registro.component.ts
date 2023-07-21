import { Component } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private peticion:PeticionService){}

nombre:String =""
apellido:String =""
cedula:String =""
edad:Number =0
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
      direccion:this.direccion,
      ciudad:this.ciudad,
      departamento:this.departamento,
      telefono:this.telefono,

    }
  }

  this.peticion.Post(data.host + data.path,data.payload).then(
    (res:any)=>{
      console.log(res)
    }
  )
}

}
