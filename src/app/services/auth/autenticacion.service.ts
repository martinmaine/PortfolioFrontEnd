/* import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  username= 'maineadmin';
  password= 'Admin2023';

  currentUserSubjet: BehaviorSubject<any>;

  constructor(
    private http: HttpClient)
 {
  console.log("El servicio está corriendo");
  this.currentUserSubjet = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
 }

 iniciarSesion(username, password) {


 }

}
 */
