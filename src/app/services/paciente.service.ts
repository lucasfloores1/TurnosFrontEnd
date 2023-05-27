import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../model/Paciente';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private apiUrl : string = 'http://localhost:8080/paciente'

  constructor( private http : HttpClient ) { }

  getPacientes () {
    return this.http.get<Paciente[]>( `${this.apiUrl}/load` )
  }

}
