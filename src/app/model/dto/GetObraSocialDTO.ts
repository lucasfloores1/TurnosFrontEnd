import { PlanDTO } from "./PlanDTO";

export interface GetObraSocialDTO{
    id: number;
    nombre: string;
    direccion? : string;
    planes: PlanDTO[];
}