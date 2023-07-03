import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../model/Medico';
import { GetMedicoDTO } from '../model/Medico';
import { NuevoMedicoDTO } from '../model/Medico';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  //private apiUrl : string = 'http://localhost:8080/medico'
  private apiUrl : string = 'https://turnomedapi.up.railway.app/medico'

  constructor( private http : HttpClient ) { }

  getMedicos( id : any ){
    return this.http.get<Medico[]>( `${this.apiUrl}/user/${id}` )
  }

  getMedicoById(id : number){
    return this.http.get<GetMedicoDTO>( `${this.apiUrl}/load/${id}` )
  }

  createMedico( medico : any ){
    return this.http.post<any>( `${this.apiUrl}/create`, medico, httpOptions )
  }

  updateMedico( medico : NuevoMedicoDTO ){
    return this.http.post<NuevoMedicoDTO>( `${this.apiUrl}/create`, medico, httpOptions )
  }
}
