import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Turno } from '../model/Turno';
import { NuevoTurnoDTO } from '../model/Turno';

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

  getTurnos( id : any ){
    return this.http.get<Turno[]>( `${this.apiUrl}/user/${id}` )
  }

  getTurnosByMedico( id : number ){
    return this.http.get<Turno[]>( `${this.apiUrl}/medico/${id}` )
  }

  createTurno( turno : NuevoTurnoDTO ){
    return this.http.post<NuevoTurnoDTO>( `${this.apiUrl}/create`, turno, httpOptions )
  }

  getTurnoById( id : any ){
    return this.http.get<Turno>( `${this.apiUrl}/load/${id}` )
  }

  updateTurno( turno : Turno ){
    return this.http.put<Turno>( `${this.apiUrl}/update/${turno.id}`, turno, httpOptions )
  }

  sendInforme( turno : Turno, files : File[] ){
    const formData = new FormData();
    for (let file of files){
      formData.append('files' , file)
    }
    return this.http.post<any>( `${this.apiUrl}/informe/${turno.id}`, formData )
  }

}
