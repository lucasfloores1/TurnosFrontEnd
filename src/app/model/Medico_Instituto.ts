import { Horario } from "./Horario";
import { Instituto } from "./Instituto";
import { Medico } from "./Medico";

export interface Medico_Instituo {

    id: number;
    medico : Medico;
    instituto : Instituto;
    horarios : Set<Horario>;

}