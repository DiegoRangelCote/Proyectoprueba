import { HttpEventType, HttpResponse } from '@angular/common/http';
import {Component, Input} from '@angular/core';
import { SubirarchivosService } from 'src/app/servicios/subirarchivos.service';

@Component({
  selector: 'app-subirarchivos',
  templateUrl: './subirarchivos.component.html',
  styleUrls: ['./subirarchivos.component.css']
})
export class SubirarchivosComponent {


  constructor(private uploadservice: SubirarchivosService){}

  progress:number = 0;
  mensaje:string = ""
  nombrearchivo:string ="Seleccionar Archivo"
  booocultarbtns:boolean = false
  selectedFiles: any
  archivoseleccionado: any

  @Input() urldestino:string =""
  @Input() path:string =""
  @Input() fileName:string =""

  selectFile(event:any){

  this.selectedFiles = event.target.files;
  this.nombrearchivo = this.selectedFiles[0].name

  }

  upload(){
    this.progress = 0;
    this.archivoseleccionado = this.selectedFiles.item(0)

    this.uploadservice.upload(this.archivoseleccionado,this.urldestino + this.path, this.fileName).subscribe(
      (event: any) => {

        if(event.type === HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded / event.total)
        }
        else if (event instanceof HttpResponse){
          console.log(event.body)
          this.mensaje = event.body.mensaje
        }



      },
      err => {
        this.progress = 0
        this.nombrearchivo = "Seleccionar Archivo"
        this.mensaje ="Se presento un error al subir el archivo"
        this.archivoseleccionado = undefined
      })

      this.selectedFiles = undefined
    
  }
  
}
