import { Horario } from "./Horario";
import { InstitutoDTO } from "./Instituto";
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

export interface NuevoMedicoDTO {

    id : number;    
    userId : number;
    nombre : string;
    dni : number;
    tel : string;
    mail : string;
    direccion : string;
    matricula : number;
    idInstituto : number;
    horarios : Set<Horario>;

}

export interface GetMedicoDTO {

    id : number;
    nombre : string;
    dni : number;
    tel : string;
    mail : string;
    direccion : string;
    matricula : number;
    institutos : Array<InstitutoDTO>;

}