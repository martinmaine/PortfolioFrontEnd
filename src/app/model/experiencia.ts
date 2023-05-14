export class ExperienciaModel {
  id? : number;
  puesto: string;
  descripcion: string;

  constructor( puesto: string, descripcion: string) {
    this.puesto = puesto;
    this.descripcion = descripcion;
  }
}
