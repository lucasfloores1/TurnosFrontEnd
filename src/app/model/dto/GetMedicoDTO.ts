import { InstitutoDTO } from "./InstitutoDTO";

export interface GetMedicoDTO {

    nombre : string;
    dni : number;
    tel : string;
    mail : string;
    direccion : string;
    matricula : number;
    institutos : Array<InstitutoDTO>;

}