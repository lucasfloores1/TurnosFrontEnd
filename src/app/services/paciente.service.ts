import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../model/Paciente';
import { GetPacienteDTO } from '../model/Paciente';
import { NuevoPacienteDTO } from '../model/Paciente';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  //private apiUrl : string = 'http://localhost:8080/paciente'
  private apiUrl : string = 'https://turnosapi.up.railway.app/paciente'

  constructor( private http : HttpClient ) { }

  getPacientes ( id : any ) {
    return this.http.get<Paciente[]>( `${this.apiUrl}/user/${id}` )
  }

  getPacienteById ( id : number ) {
    return this.http.get<GetPacienteDTO>( `${this.apiUrl}/load/${id}` )
  }

  createPaciente ( NuevopacienteDTO : NuevoPacienteDTO ){
    return this.http.post<any>( `${this.apiUrl}/create`, NuevopacienteDTO, httpOptions )
  }

}
