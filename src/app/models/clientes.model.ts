import { VariablesGlobales } from "./variablesGlobales.model";

export class Clientes {

  nombre: any;
  identificacion: any;
  telefono: any;
  email: any;
  nacimiento: any;
  ciudad: any

  constructor(v: any) {

    v.nombre = v.nombre;
    v.identificacion = v.identificacion;
    v.telefono = v.telefono;
    v.email = v.email;
    v.nacimiento = v.nacimiento;
    v.ciudad = v.ciudad;
    
    Object.assign(this, v);
  }
  

  public static getServicio() {
    let tmp = VariablesGlobales._getBody('C8',348,sessionStorage.getItem('token_fks') ?? undefined );
    tmp['data']['persona_id'] = 0;
    return tmp;
  }

} 