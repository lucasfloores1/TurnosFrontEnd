import { Turno } from "./Turno";

export interface Estudio {

    id : number;
    nombre : string;
    nomenclador : string;
    turnos : Set<Turno>

}