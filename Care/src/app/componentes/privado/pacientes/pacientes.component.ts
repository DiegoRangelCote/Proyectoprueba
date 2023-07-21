import { Component } from '@angular/core';

declare var $:any


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {

nombre:String = ""
apellido:String = ""
direccion:String = ""
contacto:String = ""
historial:String = ""
medicamento:String = ""

nuevo(){
  this.nombre = ""
  this.apellido = ""
  this.direccion = ""
  this.contacto = ""
  this.historial = ""
  this.medicamento = ""
  $('#exampleModal').modal('show')
}

}
