import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubirarchivosService {

  public baseUrl:string ="http://localhost:3000"

  constructor(private http:HttpClient) { }

  upload(file:File,url:string, inputName:string){

    const formData: FormData = new FormData()
    formData.append(inputName,file);

    const req = new HttpRequest('POST', url,formData,{
      reportProgress:true,
      responseType:'json'
    })

    return this.http.request(req)

  }



}
