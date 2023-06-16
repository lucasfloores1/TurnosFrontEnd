import { Pipe, PipeTransform } from '@angular/core';
import { Turno } from '../model/Turno';

@Pipe({
  name: 'turno'
})
export class TurnoPipe implements PipeTransform {

  transform(
    turnos: Turno[],
    medicoId?: number,
    institutoId?: number,
    estudioId?: number,
    pacienteId?: number,
    obraSocialId?: number,
    planId?: number,
    isCargado?: boolean,
    isCancelado?: boolean,
    isConfirmado?: boolean,
    allowPast : boolean = false,
    date? : Date,
  ): Turno[] {
    if (!turnos) {
      return [];
    }

    const currentDay = new Date();

    turnos.sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaA.getTime() - fechaB.getTime();
    });

    return turnos.filter(turno => {
      if (medicoId && turno.medico.id !== medicoId) {
        return false;
      }

      if (institutoId && turno.instituto.id !== institutoId) {
        return false;
      }

      if (estudioId && turno.estudio.id !== estudioId) {
        return false;
      }

      if (pacienteId && turno.paciente.id !== pacienteId) {
        return false;
      }

      if (obraSocialId && turno.obraSocial.id !== obraSocialId) {
        return false;
      }

      if (planId && turno.plan.id !== planId) {
        return false;
      }

      if (isCargado !== undefined && turno.cargado !== isCargado) {
        return false;
      }

      if (isCancelado !== undefined && turno.cancelado !== isCancelado) {
        return false;
      }

      if (isConfirmado !== undefined && turno.confirmado !== isConfirmado) {
        return false;
      }

      if (date && turno.fecha) {
        const fechaTurno = new Date(turno.fecha);
        const fechaSeleccionada = new Date(date);

        return fechaTurno.toDateString() === fechaSeleccionada.toDateString();
      }

      if (!allowPast && new Date(turno.fecha) < currentDay) {
        return false;
      }

      return true;
    });       
  }

}

//medicoId? : number, institutoId? : number, estudioId? : number, pacienteId? : number, obraSocialId? : number, planId? : number, isCargado? : boolean, isCancelado? : boolean, isConfirmado? : boolean, fecha? : Date
