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
rol_id:number=0
//public data_rol:any[] = []

  // /**
  //  * funcion para extraer el rol
  //  * @param rol ya sea 1,2,3
  //  */

 //Load(rol:string){
    // this.data_rol.push({rol:rol})
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
        // console.log(res.respuesta.documentos[0].rol_id)
        // if(res.respuesta.documentos[0].rol_id==1){
        //   console.log("entro a una prueba de rol 1")
        // }else{
        //   if(res.respuesta.documentos[0].rol_id==2){
        //     console.log("entro a una prueba de rol 2")
        //   }else{
        //     console.log("no entro ni a la 1 ni a la 2 "+res.respuesta.documentos[0].rol_id)
        //   }
          
        // }
        if(res.state == true){
                 
          console.log(res)
          if(res.respuesta.documentos[0].rol_id==1){
            console.log("entro a una prueba de rol 1")
            this.msg.Load(res.mensaje,"success")
            this.router.navigate(['/menu-pri-ad'])
            
          }else{
            if(res.respuesta.documentos[0].rol_id==2){
              console.log("entro a una prueba de rol 2")
              this.router.navigate(['/dashboard'])
              this.msg.Load(res.mensaje,"success")
              
            }else{
              console.log("no entro ni a la 1 ni a la 2 "+res.respuesta.documentos[0].rol_id)
            }
            
          }
          
          
         // this.msg.Load(res.mensaje,"success")
          //this.router.navigate(['/dashboard'])
          
        }
        else{
          this.msg.Load(res.mensaje,"danger")
        }
      }
    )
}
}