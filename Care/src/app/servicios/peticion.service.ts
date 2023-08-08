import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  //creamos una variable privada donde extraemos la configuracion del imports del app.modules.ts
  constructor(private http: HttpClient) { }
  //almacena el endpoint
  public urlLocal ='http://localhost:3000'

  //la url es la ruta que viene del backend, data los datos que trae del backend
  Post(url:string,data:{}){
    console.log(data)
    //evento que se ejecuta antes de realizar la siguiente petision
    //las promesas es capas de resolver o la puede rechazar
    let promise = new Promise((resolve,reject)=>{
        
      //los post tiene dos datos que maneja la url y los datos
        this.http.post(url,data)
        
        .toPromise()
        //cuando termina el responde con cualquier dato
        .then((res:any)=>{
          
          console.log(res)
          //terminamos resuelva la respuesta si nos genera error tenemos el error en el api
          resolve(res)
         
        })
  
    });

    return promise
  }

  Get(url:string){
    
    let promise = new Promise((resolve,reject)=>{
    
      this.http.get(url)
      .toPromise()
      .then((res:any)=>{
        console.log(res)
        resolve(res)
      })
      
    });

    return promise

  }

}
