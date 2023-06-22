import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs'
import { NuevoUserDTO } from '../model/User';
import { User } from '../model/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedInSubject: Subject<boolean> = new Subject<boolean>();
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor( private http : HttpClient ) { }

  private apiUrl : string = 'http://localhost:8080/user'

  public getUserById( id : any ){
    return this.http.get<User>( `${this.apiUrl}/load/${id}` )
  }

  public registerUser( user : NuevoUserDTO ){
    return this.http.post<User>( `${this.apiUrl}/create`, user, httpOptions )
  }

  public verifyAccount( id : any , code : string ){
    return this.http.get<User>(`${this.apiUrl}/verify-account/${id}/${code}`)
  }

  public generateToken( loginData : any ) {
    return this.http.post<any>( `${this.apiUrl}/generate-token`, loginData )
  }

  public loginUser(token : any){
    localStorage.setItem('token', token);
    this.setIsLoggedIn(true);
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == null || tokenStr == undefined || tokenStr == '') {
      this.setIsLoggedIn(false);
      return false;
    } else {
      this.setIsLoggedIn(true);
      return true;
    }
  }

  public setIsLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setIsLoggedIn(false);
    return true;
  }

  public getToken(){
    return localStorage.getItem('token')
  }

  public getUser(){
    let userStr = localStorage.getItem('user')
    if(userStr != null){
      return JSON.parse(userStr)
    }else {
      this.logout()
      return null
    }
  }

  public setUser( user : any ){
    return localStorage.setItem('user', JSON.stringify(user))
  }

  public getCurrentUser( token : any ){
    return this.http.get(`${this.apiUrl}/actual-user`, token)
  }

  public validateToken(){
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('user')        
    return this.http.get<any>( `${this.apiUrl}/validate/${token}/${id}` )
  }


}
