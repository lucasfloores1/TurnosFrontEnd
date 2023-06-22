import { Medico_Instituo } from "./Medico_Instituto";
import { Turno } from "./Turno";
import { GetMedicoDTO } from "./Medico";
import { HorarioDTO } from "./Horario";

export interface Instituto {

    userId : number;
    id : number;
    nombre : string;
    direccion : string;
    cuit : number;
    medicoInstituo : Set<Medico_Instituo>;
    turnos : Set<Turno>

}

export interface GetInstitutoDTO {
    id:        number;
    nombre:    string;
    direccion: string;
    cuit:      string;
    medicos:   GetMedicoDTO[];
}

export interface InstitutoDTO {

    id : number;
    nombre : string;
    direccion : string;
    horarios : Array<HorarioDTO>;

}

export interface NuevoInstitutoDTO {

    userId : number,
    nombre : string,
    direccion : string,
    cuit : string

}
