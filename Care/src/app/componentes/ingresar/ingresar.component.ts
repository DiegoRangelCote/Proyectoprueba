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


  constructor(private peticion:PeticionService, private msg:MensajesService, private router:Router,private rol:PeticionService){}

  correo:String =""
  contrasena:String =""
  // public data:any[] = []

  // /**
  //  * funcion para extraer el rol
  //  * @param rol ya sea 1,2,3
  //  */

  // Load(rol:string){
  //   this.data.push({rol:rol})
  // }

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
          console.log("vamos avanzando")
          //if(res.rol ==true){
          //  console.log("vamos avanzando")//montamos esta linea paraprobar
          //}
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