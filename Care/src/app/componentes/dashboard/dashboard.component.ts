import { Component } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private peticion:PeticionService, private router:Router){}
  
  rol_id:Number=0
  public data:any[] = []
  Load(rol_id:Number){
    this.data.push({rol_id})
    console.log(rol_id)
  }
}
