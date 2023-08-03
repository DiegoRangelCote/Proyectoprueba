import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  public data:any[] = []

  /**
   * funcion para escribir mensajes en pantalla
   * @param mensaje hola mundo
   * @param tipo success,danger,info
   */

  Load(mensaje:string,tipo:string){
    this.data.push({mensaje:mensaje, tipo:tipo})
    setTimeout(()=>{
      this.data.splice(0,1)
    }, 3000)
  }
}
