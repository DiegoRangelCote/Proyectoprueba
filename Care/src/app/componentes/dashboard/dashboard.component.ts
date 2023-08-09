import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent {

//   constructor(private peticion:PeticionService, private msg:MensajesService, private router:Router){}

//   rol_id:number=0
//   datos: any[]=[]

// cargarmenus(){
// this.rol_id=2
//   let data = {
//     // el enrutamiento con el que nos vamos a comunicar
//     host:this.peticion.urlLocal,
//     //la ruta que  extraemos del backend
//     path:"/Usuarios/Ingresar",
//     // datos que enviamos al backend
//     payload:{
      
//     }
//   }

//   this.peticion.Post(data.host + data.path,data.payload).then(
//     (res:any)=>{
      
//       console.log(res)
//        console.log(res.respuesta.documentos[0].rol_id)
//        if(res.respuesta.documentos[0].rol_id==1){
//         console.log("entro a una prueba de rol 1")
//           $("#menu1").hide()
//           $("#menu2").show()
//       }else{
//          if(res.respuesta.documentos[0].rol_id==2){
//            console.log("entro a una prueba de rol 2")
//               $("#menu2").hide()
//               $("#menu1").show()
//         }else{
//           console.log("no entro ni a la 1 ni a la 2 "+res.respuesta.documentos[0].rol_id)
//      } 
        
//       // }
//       // if(res.state == true){
               
//       //   console.log(res)
//       //   if(res.respuesta.documentos[0].rol_id==1){
//       //     console.log("entro a una prueba de rol 1")
//       //     $("#menu1").hide()
//       //     $("#menu2").show()
//       //     this.msg.Load(res.mensaje,"success")
//       //     this.router.navigate(['/dashboard'])
//       //   }else{
//       //     if(res.respuesta.documentos[0].rol_id==2){
//       //       console.log("entro a una prueba de rol 2")
//       //       $("#menu2").hide()
//       //       $("#menu1").show()
//       //       this.msg.Load(res.mensaje,"success")
//       //       this.router.navigate(['/dashboard'])
//       //     }else{
//       //       console.log("no entro ni a la 1 ni a la 2 "+res.respuesta.documentos[0].rol_id)
//       //     }
          
//       //   }
        
        
//       //  // this.msg.Load(res.mensaje,"success")
//       //   //this.router.navigate(['/dashboard'])
        
//       // }
//       // else{
//       //   this.msg.Load(res.mensaje,"danger")
//       // }
//     }
//   }
//   )

// }


}
