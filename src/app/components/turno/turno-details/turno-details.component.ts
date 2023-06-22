import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Turno } from 'src/app/model/Turno';
import { HorarioDTO } from 'src/app/model/Horario';
import { MedicoService } from 'src/app/services/medico.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-turno-details',
  templateUrl: './turno-details.component.html',
  styleUrls: ['./turno-details.component.scss']
})
export class TurnoDetailsComponent implements OnInit{

  @ViewChild('fileUpload')
  fileUpload! : ElementRef
  inputFileName! : String
  files : File[] = []
  maxSizeExceded : boolean = false;

  showCalendar : boolean = false;
  showInforme : boolean = false;
  turnos! : Turno[];
  horarios! : HorarioDTO[];
  newDate! : Date;

  turno! : Turno;

  constructor(
    private turnoService : TurnoService,
    private router : Router,
    private route : ActivatedRoute,
    private medicoService : MedicoService,
  ){ }

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

  toggleInforme(){
    this.showInforme = true;
  }

  sendInforme(turno : Turno, files : File[]){

    this.turnoService.sendInforme( turno, files ).subscribe( response => {
      this.router.navigate([`turno`])
    } )

  }

  catchFile(event: any) {
    const file : File = event.target.files[0];
    const maxSizeInBytes = 1 * 1024 * 1024;
    this.files.push( file )
    if ( file.size > maxSizeInBytes ){
      this.removeFile( file )
      this.maxSizeExceded = true;
    }else {
      this.maxSizeExceded = false;
    }
  }

  onClick() {
    if (this.fileUpload)
      this.fileUpload.nativeElement.click()
  }

  clearInputElement() {
    this.fileUpload.nativeElement.value = ''
  }

  removeFile(file : any){
    let ix
    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
      this.files.splice(ix, 1)
      this.clearInputElement()
    }
  }

  toggleButtons(){
    this.showCalendar = false;
    this.showInforme = false;
  }

}