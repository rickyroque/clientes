import { VariablesGlobales } from "./variablesGlobales.model";

export class User {

  user!: string;
  pass!: string;
  id_usuario: number = 0;
  token: string = '';

  constructor(u: any) {

    u.id_usuario = u?.id_usuario || 0;
    u.token = u?.token?.trim() || '';

    Object.assign(this, u);
  }
  

  public static login(form : any) {
    let tmp = VariablesGlobales._getBody('C',2, '');
    tmp['data']['user'] = btoa(form.user);
    tmp['data']['pass'] = btoa(form.pass);
    return tmp;
  }

} 