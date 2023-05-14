import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExperienciaModel } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
  experienciaURL = 'https://backportfolio-bb5w.onrender.com/experiencia/'

  constructor(
    private HttpClient: HttpClient
  ) { }

  //Metodos
  //Mostrar
  public lista(): Observable<ExperienciaModel[]> {
    return this.HttpClient.get<ExperienciaModel[]>(this.experienciaURL + 'lista');
  }

  //Crear
  public save(preparacion: ExperienciaModel): Observable<any> {
    return this.HttpClient.post<any>(this.experienciaURL + `create`, preparacion);
  }

  //Borrar
  public delete(id: number): Observable<any> {
    return this.HttpClient.delete<any>(this.experienciaURL + `delete/${id}`);
  }


}
