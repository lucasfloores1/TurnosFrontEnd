import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Instituto } from '../model/Instituto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class InstitutoService {

  private apiUrl : string = 'http://localhost:8080/instituto'

  constructor( private http : HttpClient ) { }

  getInstitutos( id : any ){
    return this.http.get<Instituto[]>( `${this.apiUrl}/user/${id}` )
  }

  createInstituto( instituto : any ){
    return this.http.post<any>( `${this.apiUrl}/create`, instituto, httpOptions ) 
  }
  
}
