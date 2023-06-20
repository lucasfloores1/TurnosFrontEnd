import { PlanDTO } from "./PlanDTO";

export interface ObraSocialDTO {

    id : number;
    nombre : string;
    direccion : string;
    plan : PlanDTO;
    afiliado : string;

}