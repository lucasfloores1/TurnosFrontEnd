import { Paciente_ObraSocial } from "./Paciente_ObraSocial";
import { Plan, PlanDTO } from "./Plan";
import { Turno } from "./Turno";

export interface ObraSocial {

    userId : number;
    id : number;
    nombre : string;
    direccion : string;
    pacienteObraSocial : Set<Paciente_ObraSocial>;
    turnos : Set<Turno>;
    planes : Array<Plan>;

}

export interface GetObraSocialDTO{
    id: number;
    nombre: string;
    direccion? : string;
    planes: PlanDTO[];
}

export interface NuevaObraSocialDTO {

    userId : number;
    nombre : string;
    direccion? : string;
    planes : Array<PlanDTO>;
    
}

export interface ObraSocialDTO {

    id : number;
    nombre : string;
    direccion : string;
    plan : PlanDTO;
    afiliado : string;

}