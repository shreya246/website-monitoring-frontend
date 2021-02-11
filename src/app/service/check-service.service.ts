import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Check} from './../model/Check';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class CheckServiceService {
  token: string="";
  jwtHelper: JwtHelperService= new JwtHelperService();
  constructor(private http: HttpClient) { }
  setToken(token: string){
    this.token=token;
  }
  getToken():string{
    return this.token;
  }
  getTokenWithCredentials():Observable<any>{
    let data = {'email': "shreya@gmail.com", 'password': 'password'};
    return this.http.post('http://localhost:8090/login',data,{
      responseType: 'text'
    });
  }
  getAllCheck():Observable<Check[]>{
    
    const headerDict = {
      'Authorization': 'Bearer '+this.getToken()
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
 return this.http.get<Check[]>('http://localhost:8090/check',requestOptions);
  }
  deleteCheck(name: string):Observable<any>{
   
   
 return this.http.delete('http://localhost:8090/check/delete?name='+name,
  {
    headers: new HttpHeaders({
      'Authorization': 'Bearer '+this.getToken()
    }),
    observe: 'response',
    responseType: 'text'

  }
 );
  }

  updateCheckValue(updateCheck: any): Observable<Object>{
    
    return this.http.post('http://localhost:8090/check/update',updateCheck,
  {
    headers: new HttpHeaders({
      'Authorization': 'Bearer '+this.getToken()
    }),
    observe: 'response',
    responseType: 'text'

  }
 )

  }
  addNewCheck(check: Check): Observable<Object>{
  
    return this.http.post('http://localhost:8090/check',check,
  {
    headers: new HttpHeaders({
      'Authorization': 'Bearer '+this.getToken()
    }),
    observe: 'response',
    responseType: 'text'

  }
 )

  }

 tokenExpired(): boolean {
    return  this.jwtHelper.isTokenExpired(this.getToken());
  }
  
}
