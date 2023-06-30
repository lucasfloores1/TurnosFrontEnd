import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudio } from '../model/Estudio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  private apiUrl : string = 'http://localhost:8080/estudio'
  //private apiUrl : string = 'https://turnosapi.up.railway.app/estudio'

  constructor( private http : HttpClient ) { }

  getEstudios( id : any ){
    return this.http.get<Estudio[]>( `${this.apiUrl}/user/${id}` )
  }

  createEstudio( estudio : any ){
    return this.http.post<any>( `${this.apiUrl}/create`, estudio, httpOptions )
  }

  getEstudioById( id : any ){
    return this.http.get<Estudio>( `${this.apiUrl}/load/${id}` )
  }
  
}
