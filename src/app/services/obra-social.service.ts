import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObraSocial } from '../model/ObraSocial';
import { Plan } from '../model/Plan';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ObraSocialService {

  private apiUrl : string = 'http://localhost:8080/obraSocial'

  constructor( private http : HttpClient ) { }

  getObrasSociales() {
    return this.http.get<ObraSocial[]>( `${this.apiUrl}/load` )
  }

  getPlanesByObraSocial( id : number){
    return this.http.get<Plan[]>( `${this.apiUrl}/planes/${id}` )
  }
}
