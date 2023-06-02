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

  constructor( private http : HttpClient ) { }

  getEstudios(){
    return this.http.get<Estudio[]>( `${this.apiUrl}/load` )
  }
  
}
