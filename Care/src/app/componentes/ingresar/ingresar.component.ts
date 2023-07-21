import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {


  constructor(private peticion:PeticionService, private msg:MensajesService, private router:Router){}

  correo:String =""
  contrasena:String =""

  Ingresar(){

    let data = {
      host:this.peticion.urlLocal,
      path:"/Usuarios/Ingresar",
      payload:{
        correo:this.correo,
        contrasena:this.contrasena,
  
      }
    }
  
    this.peticion.Post(data.host + data.path,data.payload).then(
      (res:any)=>{
        console.log(res)
        if(res.state == true){
          this.msg.Load(res.mensaje,"success")
          this.router.navigate(['/dashboard'])
        }
        else{
          this.msg.Load(res.mensaje,"danger")
        }
      }
    )
}
}