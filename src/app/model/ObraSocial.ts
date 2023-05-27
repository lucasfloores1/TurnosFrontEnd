import { Paciente_ObraSocial } from "./Paciente_ObraSocial";
import { Plan } from "./Plan";
import { Turno } from "./Turno";

export interface ObraSocial {

    id : number;
    nombre : string;
    direccion : string;
    pacienteObraSocial : Set<Paciente_ObraSocial>;
    turnos : Set<Turno>;
    planes : Set<Plan>;

}