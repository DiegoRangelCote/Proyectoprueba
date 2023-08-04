import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { SubirarchivosService } from 'src/app/servicios/subirarchivos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private peticion:PeticionService, private subirarchivos:SubirarchivosService) {}
  datos:any[] = []

  item:any = {
    destino:this.subirarchivos.baseUrl,
    path:"/files/archivos/docs"
  }

  ngOnInit(): void {
    this.CargarTodasServicios()
  }

  CargarTodasServicios(){
    let data = {
      host:this.peticion.urlLocal,
      path:"/Servicios/CargarTodas",
      payload:{
      }
    }
  
    this.peticion.Post(data.host + data.path,data.payload).then(
      (res:any)=>{
        
        this.datos = res.documentos
       
      }
    )
  
  }

}
