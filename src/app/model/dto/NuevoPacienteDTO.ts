import { PacienteOSDTO } from "./PacienteOSDTO";

export interface NuevoPacienteDTO {
    userId : number;
    id : number;    
    nombre : string;
    dni : number;
    tel : string;
    mail : string;
    direccion : string;
    obrasSociales : PacienteOSDTO[]
}