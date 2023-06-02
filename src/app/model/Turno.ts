import { Estudio } from "./Estudio";
import { Instituto } from "./Instituto";
import { Medico } from "./Medico";
import { ObraSocial } from "./ObraSocial";
import { Paciente } from "./Paciente";
import { Plan } from "./Plan";

export interface Turno {

    id : number;
    fecha : Date;
    confirmado : boolean;
    cargado : boolean;
    paciente : Paciente;
    obraSocial : ObraSocial;
    plan : Plan;
    medico : Medico;
    instituto : Instituto;
    estudio : Estudio;

}