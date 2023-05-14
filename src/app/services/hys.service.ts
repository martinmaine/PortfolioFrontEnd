import { HySModel } from './../model/hys';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HysService {
  HysURL = 'http://localhost:8080/hys/';

  constructor(
    private httpClient: HttpClient) { }

  //Metodos
  //Mostrar
  public lista(): Observable<HySModel[]> {
    return this.httpClient.get<HySModel[]>(this.HysURL + 'lista');
  }

  //CREAR
  public save(hys: HySModel): Observable<any> {
    return this.httpClient.post<any>(this.HysURL + `create`, hys);
  }

  //BORRAR
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.HysURL + `delete/${id}`);
  }

  public edit(hys: HySModel): Observable<HySModel> {
    return this.httpClient.put<HySModel>(this.HysURL + 'editar/', hys);
  }

  getSkillsId(id: number) {
    return this.httpClient.get<HySModel>(this.HysURL + "/" + id)
  }

  updateSkills(hys: HySModel) {
    return this.httpClient.put<HySModel>(this.HysURL + "/" + hys.id, hys)
  }
}
