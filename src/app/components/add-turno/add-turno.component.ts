import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/model/Turno';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-add-turno',
  templateUrl: './add-turno.component.html',
  styleUrls: ['./add-turno.component.css']
})
export class AddTurnoComponent implements OnInit{

  turnos : Turno[] = []

  constructor( private turnoService : TurnoService ){}

  ngOnInit(): void {
    this.turnoService.getTurnos().subscribe( response => {
      this.turnos = response;
      console.log(this.turnos);
    })
  }



}
