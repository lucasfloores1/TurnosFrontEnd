import { Medico_Instituo } from "./Medico_Instituto";
import { Turno } from "./Turno";

export interface Instituto {

    id : number;
    nombre : string;
    direccion : string;
    cuit : number;
    medicoInstituo : Set<Medico_Instituo>;
    turnos : Set<Turno>

}