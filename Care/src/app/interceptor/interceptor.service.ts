import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor')
    const requestOptions ={
      headers: new HttpHeaders({
        //"Content-Type":"application/json;charset=UTF-8"
      }),
      withCredentials:true
    }

    const reqClone = request.clone(requestOptions)




    return next.handle(reqClone);
  }
}
