export interface User {

    id : number,
    username : string,
    email : string,
    nombre : string,
    password : string,
    enabled : boolean,
    verification : string,
    
}

export interface NuevoUserDTO {
    nombre : string;
    tel : string;
    email : string;
    username : string;
    password : string;
}