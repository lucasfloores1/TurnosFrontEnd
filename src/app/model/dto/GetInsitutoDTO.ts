import { GetMedicoDTO } from "./GetMedicoDTO";

export interface GetInstitutoDTO {
    id:        number;
    nombre:    string;
    direccion: string;
    cuit:      string;
    medicos:   GetMedicoDTO[];
}
