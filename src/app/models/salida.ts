import { Colaborador } from "./colaborador";
import { Patrimonio } from "./patrimonio";

export class Salida {
    id : number;
    fecha : Date;
    cantidad : number;
    tipo : string;
    patrimonioSalida : Patrimonio;
    colaborador : Colaborador;

    dniColaborador : String;
	desPatrimonio : String; 
	umPatrimonio : String;
}
