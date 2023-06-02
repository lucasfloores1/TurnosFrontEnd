import { InstitutoDTO } from "./InstitutoDTO";
import { planDTO } from "./PlanDTO";

export interface ObraSocialDTO {

    id : number;
    nombre : string;
    direccion : string;

    plan : planDTO;
    afiliado : string;

}