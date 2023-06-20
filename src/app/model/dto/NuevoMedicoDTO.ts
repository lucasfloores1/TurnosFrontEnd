import { Horario } from "../Horario";
import { Instituto } from "../Instituto";

export interface NuevoMedicoDTO {

    id : number;    
    userId : number;
    nombre : string;
    dni : number;
    tel : string;
    mail : string;
    direccion : string;
    matricula : number;
    idInstituto : number;
    horarios : Set<Horario>;

}