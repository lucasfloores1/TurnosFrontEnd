import { ObraSocialDTO } from "./ObraSocialDTO";

export interface GetPacienteDTO {

    id : number;
    nombre : string;
    dni : number;
    tel : string;
    mail : string;
    direccion : string;

    obrasSociales : Array<ObraSocialDTO>

}