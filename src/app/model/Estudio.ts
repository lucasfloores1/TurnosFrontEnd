import { Turno } from "./Turno";

export interface Estudio {

    userId : number;
    id : number;
    nombre : string;
    nomenclador : string;
    turnos : Set<Turno>

}