
export class Calendario {

  viaje: any;
  fecha: any;
  estado: any;
  valor: any;

  constructor(v: any) {

    v.viaje = v.viaje;
    v.fecha = v.fecha;
    v.estado = v.estado;
    v.valor = v.valor;
    
    Object.assign(this, v);
  }
  
} 