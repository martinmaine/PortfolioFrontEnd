export class HySModel {
  public id?: number;
  public porcentaje!: number;
  public nombre!: string;


  constructor(porcentaje: number, nombre: string){
      this.porcentaje = porcentaje;
      this.nombre = nombre;
  }
}
