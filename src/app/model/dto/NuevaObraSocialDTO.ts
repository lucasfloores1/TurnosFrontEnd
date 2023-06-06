import { Plan } from "../Plan";

export interface NuevaObraSocialDTO {

    userId : number;
    nombre : string;
    direccion? : string;
    planes : Set<Plan>;
    
}