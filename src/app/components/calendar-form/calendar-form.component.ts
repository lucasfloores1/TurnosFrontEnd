import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment'
import { Turno } from 'src/app/model/Turno';
import { HorarioDTO } from 'src/app/model/dto/HorarioDTO';

@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.css']
})
export class CalendarFormComponent implements OnInit{

  @Input() horarios! : HorarioDTO[]
  @Input() turnos! : Turno[]
  
  tableColumns! : string;

  weekDays : string[] = []

  weekSelect! : any[];
  currentWeek : any = moment().isoWeek();
  firstDayOfWeek : any = moment().year(2023).week(this.currentWeek).startOf('isoWeek')
  lastDayOfWeek : any = moment().year(2023).week(this.currentWeek).endOf('isoWeek')

  constructor(){}
  
  ngOnInit(): void {

    console.log(this.turnos);    
    this.tableColumns = `repeat(${this.horarios.length}, 1fr)`
    this.horarios.sort((a, b) => {
      // Compara los atributos "dia" de los objetos "a" y "b"
      return a.dia - b.dia;
    });
    this.setWeekDays(this.horarios);
    this.getDaysFromDate()    
    
  }

  getDaysFromDate(año?: number, semana?: number) {
    const year = año ? año : moment().isoWeekYear();
    const week = semana ? semana : moment().isoWeek();

    const allDaysPassed = this.horarios.every((horario: HorarioDTO) => {
      const dayOfWeek = horario.dia;
      return moment().year(year).isoWeek(week).isoWeekday(dayOfWeek).isBefore(moment(), 'day');
    });
  
    if (allDaysPassed) {
      this.currentWeek++;
      this.firstDayOfWeek = moment().year(2023).week(this.currentWeek).startOf('isoWeek')
      this.lastDayOfWeek = moment().year(2023).week(this.currentWeek).endOf('isoWeek')
      this.getDaysFromDate(2023, this.currentWeek)
    } else {

      this.weekSelect = this.horarios.map((horario: HorarioDTO) => {
        const dayOfWeek = horario.dia;
    
        const dayObject = moment().year(year).isoWeek(week).isoWeekday(dayOfWeek);
        const inicio = moment(horario.inicio, 'HH:mm');
        const fin = moment(horario.fin, 'HH:mm');
        const elementosHora = [];
    
        while (inicio <= fin) {
          const horarioNuevo = inicio.clone().year(year).isoWeek(week).date(dayObject.date());
          elementosHora.push(horarioNuevo);
          inicio.add(30, 'minutes');
        }
    
        const ocupado = moment().year(year).isoWeek(week).isoWeekday(dayOfWeek).isSameOrAfter(moment(), 'day')    
    
        return {
          name: dayObject.format('DD-MM'),
          horarios: elementosHora,
          ocupado: ocupado
        };
      });
    }
  }

  nextWeek(){
    this.currentWeek++
    this.firstDayOfWeek = moment().year(2023).week(this.currentWeek).startOf('isoWeek')
    this.lastDayOfWeek = moment().year(2023).week(this.currentWeek).endOf('isoWeek')
    this.getDaysFromDate(2023,this.currentWeek);
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
    console.log( horario.format('DD-MM-YYYY HH:mm') );    
  }
}
