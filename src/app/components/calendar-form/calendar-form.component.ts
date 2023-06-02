import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Turno } from 'src/app/model/Turno';
import { HorarioDTO } from 'src/app/model/dto/HorarioDTO';
import { addMinutes, addWeeks, endOfWeek, format, getISOWeek, getYear, isBefore, parse, setISODay, startOfWeek, subWeeks } from 'date-fns'

@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.css']
})
export class CalendarFormComponent implements OnInit, OnChanges{

  @Input() horarios! : HorarioDTO[]
  @Input() turnos! : Turno[]

  @Output() fecha : EventEmitter<String> = new EventEmitter;
  @Output() reset : EventEmitter<any> = new EventEmitter;
  
  tableColumns! : string;

  weekDays : string[] = []

  weekSelect! : any[];
  currentWeek : Date = new Date();
  firstDayOfWeek! : Date;
  lastDayOfWeek! : Date;

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes['horarios'] && changes['horarios'].currentValue && changes['horarios'].previousValue ){

      this.resetComponent()

    }
  }
  
  ngOnInit(): void {  
    
    this.tableColumns = `repeat(${this.horarios.length}, 1fr)`
    this.horarios.sort((a, b) => {
      return a.dia - b.dia;
    });
    this.setWeekDays(this.horarios);
    this.getDaysFromDate()    
    
  }

  getDaysFromDate(año?: number, semana?: number) {
    const year = año ? año : getYear(this.currentWeek);
    const week = semana ? semana : getISOWeek(this.currentWeek);   

    const allDaysPassed = this.horarios.every((horario: HorarioDTO) => {
      const dayOfWeek = setISODay(this.currentWeek, horario.dia);      
      return isBefore(dayOfWeek, new Date());
    });
 
    if (allDaysPassed) {
      this.nextWeek()
    } else {

      this.weekSelect = this.horarios.map((horario: HorarioDTO) => {
            
        const day = setISODay( this.currentWeek ,horario.dia );
        const inicioParts = horario.inicio.split(':');
        const inicioHours = parseInt(inicioParts[0], 10);
        const inicioMinutes = parseInt(inicioParts[1], 10);
        const inicio = new Date();
        inicio.setHours(inicioHours);
        inicio.setMinutes(inicioMinutes);


        const finParts = horario.fin.split(':');
        const finHours = parseInt(finParts[0], 10);
        const finMinutes = parseInt(finParts[1], 10);
        const fin = new Date();
        fin.setHours(finHours);
        fin.setMinutes(finMinutes);              
                
        const turnos = [];
        
        let currentTime = inicio;
        
        while (currentTime <= fin) {
          const horarioNuevo = this.setDate( day, currentTime );
          const isPast =  isBefore(horarioNuevo, new Date());

          const isGiven = this.turnos.some((turno: Turno) => {   
            return parse(turno.fecha, 'yyyy-MM-dd HH:mm:ss', new Date()).getTime() == horarioNuevo.getTime();
          });

          turnos.push({
            horario : horarioNuevo,
            pasado : isPast,
            dado : isGiven
          });
          
          currentTime = addMinutes( currentTime, horario.intervalo );

        }  
    
        return {
          name: format(day, 'dd-MM'),
          horarios: turnos,
        };        
      });      
    }
    this.firstDayOfWeek = startOfWeek(this.currentWeek);
    this.lastDayOfWeek = endOfWeek(this.currentWeek);
  }

  nextWeek(){
    this.currentWeek = addWeeks(this.currentWeek, 1)
    this.firstDayOfWeek = startOfWeek( this.currentWeek )
    this.lastDayOfWeek = endOfWeek( this.currentWeek )
    this.getDaysFromDate(getYear(this.currentWeek), getISOWeek(this.currentWeek))
  }

  previousWeek(){
    this.currentWeek = subWeeks(this.currentWeek, 1)
    this.firstDayOfWeek = startOfWeek( subWeeks(this.currentWeek, 1) )
    this.lastDayOfWeek = endOfWeek( subWeeks(this.currentWeek, 1) )
    this.getDaysFromDate(getYear(this.currentWeek), getISOWeek(this.currentWeek))
  }

  setWeekDays( horariosDTO : HorarioDTO[] ){
    this.weekSelect = [];
    this.horarios.map( ( horario : HorarioDTO ) =>{
      switch (horario.dia){
        case 1 : 
          this.weekDays.push('Lunes')
          break;
        case 2 :
          this.weekDays.push('Martes')
          break;
        case 3 : 
          this.weekDays.push('Miercoles')
          break;
        case 4 :
          this.weekDays.push('Jueves')
          break;
        case 5 : 
          this.weekDays.push('Viernes')
          break;
        case 6 :
          this.weekDays.push('Sabado')
          break;
        case 7 :
          this.weekDays.push('Domingo')
          break;
      }
    })
  }

  loadToHorarioDTO( horario : any){
    this.fecha.emit( format(horario, 'yyyy-MM-dd HH:mm:ss') );    
  }

  private setDate(date: Date, time: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());
  }

  resetComponent(){
    this.tableColumns = ''
    this.currentWeek = new Date()
    this.weekSelect = []
    this.weekDays = []
    this.reset.emit()
    this.ngOnInit()
  }

}
