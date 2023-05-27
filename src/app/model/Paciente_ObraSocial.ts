import { ObraSocial } from "./ObraSocial";
import { Paciente } from "./Paciente";
import { Plan } from "./Plan";

export interface Paciente_ObraSocial {

    id : number;
    afiliado : string;
    paciente : Paciente;
    obraSocial : ObraSocial;
    plan : Plan;


}