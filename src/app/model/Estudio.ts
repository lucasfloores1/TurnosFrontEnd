import { Turno } from "./Turno";

export interface Estudio {

    id : number;
    nombre : string;
    turnos : Set<Turno>

}