import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../model/Medico';
import { GetMedicoDTO } from '../model/dto/GetMedicoDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private apiUrl : string = 'http://localhost:8080/medico'

  constructor( private http : HttpClient ) { }

  getMedicos( id : any ){
    return this.http.get<Medico[]>( `${this.apiUrl}/user/${id}` )
  }

  getMedicoById(id : number){
    return this.http.get<GetMedicoDTO>( `${this.apiUrl}/load/${id}` )
  }
}
