import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Horario } from 'src/app/model/Horario';
import { Turno } from 'src/app/model/Turno';
import { HorarioDTO } from 'src/app/model/dto/HorarioDTO';
import { InstitutoDTO } from 'src/app/model/dto/InstitutoDTO';
import { MedicoService } from 'src/app/services/medico.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-turno-details',
  templateUrl: './turno-details.component.html',
  styleUrls: ['./turno-details.component.scss']
})
export class TurnoDetailsComponent implements OnInit{

  showCalendar : boolean = false;
  turnos! : Turno[];
  horarios! : HorarioDTO[];
  newDate! : Date;

  turno! : Turno;
  constructor(
    private turnoService : TurnoService,
    private router : Router,
    private route : ActivatedRoute,
    private medicoService : MedicoService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap : any) => {
      const {params} = paramMap;
      this.loadTurno(params.id) 
    })
  }

  loadTurno( id : any ){
    this.turnoService.getTurnoById( id ).subscribe( response => this.turno = response )
  }

  cancelTurno( turno : Turno ){
    turno.cancelado = true;
    this.turnoService.updateTurno( turno ). subscribe( response => {
      this.router.navigate(['turno'])
    })
  }


  reprogramarTurno(){
    this.showCalendar = true;
    this.turnoService.getTurnosByMedico( this.turno.medico.id ).subscribe( response => this.turnos = response )
    this.medicoService.getMedicoById(this.turno.medico.id).subscribe( response => {
      const inst = response.institutos.filter( insti => insti.id == this.turno.instituto.id )
      this.horarios = inst[0].horarios
    })
  }

  SetNewDate( date : any ){
    this.newDate = date;
  }

  updateTurno( date : Date, turno : Turno ){
    turno.fecha = date.toString()
    this.turnoService.updateTurno( turno ).subscribe( response => {
      this.router.navigate([`turno`])
    })        
  }
}
