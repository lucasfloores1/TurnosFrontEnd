import { HorarioDTO } from "./HorarioDTO";

export interface InstitutoDTO {

    id : number;
    nombre : string;
    direccion : string;
    horarios : Array<HorarioDTO>;

}