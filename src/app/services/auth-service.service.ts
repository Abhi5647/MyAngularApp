import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  registation(data:any):Observable<any>{
   return this.http.post('http://localhost:3000/register',data)
  }

  login(data:any):Observable<any>{
    let headers={
      'Authorization':'Bearer'+ localStorage.getItem('token')
    }
   return this.http.post('http://localhost:3000/login',data )
  }

  verified!:boolean ;
  
  mongoDb():Observable<any>{
    let headers={
      'Authorization':'Bearer'+ localStorage.getItem('token')
    }
    return this.http.get('http://localhost:3000/main', {headers:headers})
  }
}
