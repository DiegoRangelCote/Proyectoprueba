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
      // el enrutamiento con el que nos vamos a comunicar
      host:this.peticion.urlLocal,
      //la ruta que  extraemos del backend
      path:"/Usuarios/Ingresar",
      // datos que enviamos al backend
      payload:{
        correo:this.correo,
        contrasena:this.contrasena,
        
      }
    }
  
    //creamos la peticion de forma post, la url es la direccion a la que deseo ir que es el host mas el path
    //tambien debe tener los datos que se reciben del usuario conocidos como payload
    //then cuando termine va a emitir una respuesta
    this.peticion.Post(data.host + data.path,data.payload).then(
      (res:any)=>{
        
        console.log(res)
        if(res.state == true){
                   
          console.log(res)
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