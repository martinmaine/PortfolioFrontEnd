export class PreparacionModel {
  id? : number;
  curso: string;
  institucion: string;

  constructor( curso: string, institucion: string) {
    this.curso = curso;
    this.institucion = institucion;
  }
}
