import { PlanDTO } from "./PlanDTO";

export interface NuevaObraSocialDTO {

    userId : number;
    nombre : string;
    direccion? : string;
    planes : Array<PlanDTO>;
    
}