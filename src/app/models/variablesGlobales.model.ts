import * as platform from "platform";
import { environment } from "src/environments/environment";


export class VariablesGlobales {
  public static title: string = '';
  
  static _idKernel: string = platform.description ?? 'Descripción no disponible';
  static _idEquipo: string = '190.214.74.136';
  static _equipo: string =
    platform.os!.family +
    ' ' +
    platform.os!.version +
    ' ' +
    platform.os!.architecture +
    'bits';

  public static _getBody(m: string, i: number, t: string = ''): any {
    let zone = new Date().getTimezoneOffset() / -60;
    var _body = {
      aplicacion: environment.id,
      id_qrt: i,
      data: {
        zona: zone,
        metodo: m,
        token: t,
        equipo: this._equipo,
        idequipo: this._idEquipo,
        idkernel: this._idKernel,
      },
    };
    return _body;
  }

}
