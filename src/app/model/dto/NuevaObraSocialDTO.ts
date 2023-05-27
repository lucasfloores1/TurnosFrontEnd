import { Plan } from "../Plan";

export interface NuevaObraSocialDTO {

    nombre : string;
    direccion? : string;
    planes : Set<Plan>;
    
}