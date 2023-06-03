import { ObraSocial } from "./ObraSocial";
import { Paciente_ObraSocial } from "./Paciente_ObraSocial";
import { Turno } from "./Turno";

export interface Plan {

    id : number;
    nombre : string;
    obraSocial : ObraSocial;
    turnos : Array<Turno>;
    pacientes : Array<Paciente_ObraSocial>;

}