import { Component, OnInit } from '@angular/core';
import { HysService } from 'src/app/services/hys.service';
import { HySModel } from 'src/app/model/hys';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent {
  hys: HySModel[] = [];
  formHys: FormGroup;
  nombre: string = '';
  porcentaje: number = 0;
  userLoginOn: boolean = false;

  constructor(
    private hysService: HysService,
    private loginService: LoginService,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.formHys = this.fb.group({
      nombre: ['', [Validators.required]],
      porcentaje: [0, [Validators.max(100)]]
  })
}

ngOnInit(): void {
  this.loginService.currentUserLoginOn.subscribe({
    next: (userLoginOn: boolean) => {
      this.userLoginOn = userLoginOn;
    }
  });
this.cargarHys();
  const hysId = this.aRoute.snapshot.params['id'];
  this.hysService.lista().subscribe(data => {
    this.hys = data;
    const element = this.hys.find(item => item.id === parseInt(hysId));
    this.formHys.patchValue({
      id: element?.id,
      nombre: element?.nombre,
      porcentaje: element?.porcentaje,
    });
  }
)}


cargarHys(): void {
  this.hysService.lista().subscribe(
    data => { this.hys = data }
  )
}

get Nombre() {
  return this.formHys.get("nombre")
}

get Porcentaje() {
  return this.formHys.get("porcentaje")
}

onCreate(): void {
  const hys = new HySModel (this.porcentaje, this.nombre);
  this.hysService.save(hys).subscribe(data => {
    alert("Operación exitosa");
    window.location.reload();
  }, err => {
    alert("Ups! No pudimos realizar la carga. Intente nuevamente más tarde");
    this.formHys.reset();
  });
}

onEnviar(event: Event) {
  event.preventDefault();
  if (this.formHys.valid) {
    this.onCreate();
  } else {
    alert("Ups! No pudimos realizar la carga. Intente nuevamente más tarde");
    this.formHys.markAllAsTouched();
  }
}

deleteBtn(id?: number) {
  if (id != undefined) {
    this.hysService.delete(id).subscribe(
      data => {
        this.cargarHys();
      }, err => {
        alert("Experiencia no borrada");
      }
    )
  }
}
}
