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