import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../model/Turno';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  private apiUrl : string = 'http://localhost:8080/turno'

  constructor( private http : HttpClient ) { }

  getTurnos(){
    return this.http.get<Turno[]>( `${this.apiUrl}/load` )
  }

  getTurnosByMedico( id : number ){
    return this.http.get<Turno[]>( `${this.apiUrl}/medico/${id}` )
  }


}
