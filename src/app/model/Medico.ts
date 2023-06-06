import { Medico_Instituo } from "./Medico_Instituto";
import { Turno } from "./Turno";

export interface Medico {

    userId : number;
    id : number;
    nombre : string;
    dni : number;
    tel : string;
    mail : string;
    direccion : string;
    matricula : number;
    medicoInstituto : Set<Medico_Instituo>;
    turnos : Set<Turno>;

}