import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObraSocial } from '../model/ObraSocial';
import { Plan } from '../model/Plan';
import { NuevaObraSocialDTO } from '../model/ObraSocial';

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

  getObrasSociales( id : any ) {
    return this.http.get<ObraSocial[]>( `${this.apiUrl}/user/${id}` )
  }

  getPlanesByObraSocial( id : number){
    return this.http.get<Plan[]>( `${this.apiUrl}/planes/${id}` )
  }

  createObraSocial ( obraSocial : NuevaObraSocialDTO ){
    return this.http.post<NuevaObraSocialDTO>( `${this.apiUrl}/create`, obraSocial, httpOptions )
  }

  getObraSocialById( id : number ){
    return this.http.get<ObraSocial>( `${this.apiUrl}/load/${id}` )
  }
}
