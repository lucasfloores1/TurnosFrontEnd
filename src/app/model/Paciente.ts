import { ObraSocialDTO } from "./ObraSocial";
import { Paciente_ObraSocial } from "./Paciente_ObraSocial";
import { Turno } from "./Turno";

export interface Paciente {

    userId : number;
    id : number;
    nombre : string;
    dni : number;
    tel : string;
    mail : string;
    direccion : string;
    obrasSociales : Array<Paciente_ObraSocial>;
    turnos : Set<Turno>;

}

export interface PacienteOSDTO {
    idObraSocial : number;
    idPlan : number;
    afiliado : string;
}

export interface NuevoPacienteDTO {
    userId : number;
    id : number;    
    nombre : string;
    dni : number;
    tel : string;
    mail : string;
    direccion : string;
    obrasSociales : PacienteOSDTO[]
}

export interface GetPacienteDTO {

    id : number;
    nombre : string;
    dni : number;
    tel : string;
    mail : string;
    direccion : string;

    obrasSociales : Array<ObraSocialDTO>

}