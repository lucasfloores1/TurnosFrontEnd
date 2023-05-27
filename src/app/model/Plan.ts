import { ObraSocial } from "./ObraSocial";
import { Paciente_ObraSocial } from "./Paciente_ObraSocial";
import { Turno } from "./Turno";

export interface Plan {

    id : number;
    nombre : string;
    obraSocial : ObraSocial;
    turnos : Set<Turno>;
    pacientes : Set<Paciente_ObraSocial>;

}