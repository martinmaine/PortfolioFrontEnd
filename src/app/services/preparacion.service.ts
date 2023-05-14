import { PreparacionModel } from './../model/preparacion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PreparacionService {
  preparacionURL = 'http://localhost:8080/preparacion/'

  constructor(
    private HttpClient: HttpClient
  ) { }

  //Metodos
  //Mostrar
  public lista(): Observable<PreparacionModel[]> {
    return this.HttpClient.get<PreparacionModel[]>(this.preparacionURL + 'lista');
  }

  //Crear
  public save(preparacion: PreparacionModel): Observable<any> {
    return this.HttpClient.post<any>(this.preparacionURL + `create`, preparacion);
  }

  //Borrar
  public delete(id: number): Observable<any> {
    return this.HttpClient.delete<any>(this.preparacionURL + `delete/${id}`);
  }

  //Editar
  public edit(preparacion: PreparacionModel): Observable<PreparacionModel> {
    return this.HttpClient.put<PreparacionModel>(this.preparacionURL + 'editar/', preparacion);
  }

}
