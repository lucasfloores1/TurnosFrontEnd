export interface NuevoTurnoDTO {

    userId : number;
    id : number;
    fecha : string;
    confirmado : boolean;
    cargado : boolean;
    cancelado : boolean;
    idPaciente : number;
    idObraSocial : number;
    idPlan : number;
    idMedico : number;
    idInstituto : number;
    idEstudio : number;

}