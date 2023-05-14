import { Component, OnInit } from '@angular/core';
import { PreparacionService } from 'src/app/services/preparacion.service';
import { PreparacionModel } from 'src/app/model/preparacion'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-preparacion',
  templateUrl: './preparacion.component.html',
  styleUrls: ['./preparacion.component.css']
})

export class PreparacionComponent implements OnInit {
  preparacion: PreparacionModel[] = [];
  formPreparacion: FormGroup;
  curso: string = '';
  institucion: string = '';
  userLoginOn: boolean = false;


  constructor(
    private preparacionService: PreparacionService,
    private loginService: LoginService,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.formPreparacion = this.fb.group({
      curso: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn: boolean) => {
        this.userLoginOn = userLoginOn;
      }
    });
  this.cargarPreparacion();
    const preparacionId = this.aRoute.snapshot.params['id'];
    this.preparacionService.lista().subscribe(data => {
      this.preparacion = data;
      const element = this.preparacion.find(item => item.id === parseInt(preparacionId));
      this.formPreparacion.patchValue({
        id: element?.id,
        curso: element?.curso,
        institucion: element?.institucion,
      });
    }
  )}


  cargarPreparacion(): void {
    this.preparacionService.lista().subscribe(
      data => { this.preparacion = data }
    )
  }

  get Curso() {
    return this.formPreparacion.get("curso")
  }

  get Institucion() {
    return this.formPreparacion.get("institucion")
  }

  onCreate(): void {
    const preparacion = new PreparacionModel(this.curso, this.institucion);
    this.preparacionService.save(preparacion).subscribe(data => {
      alert("Operación exitosa");
      window.location.reload();
    }, err => {
      alert("Ups! No pudimos realizar la carga. Intente nuevamente más tarde");
      this.formPreparacion.reset();
    });
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.formPreparacion.valid) {
      this.onCreate();
    } else {
      alert("Ups! No pudimos realizar la carga. Intente nuevamente más tarde");
      this.formPreparacion.markAllAsTouched();
    }
  }

  deleteBtn(id?: number) {
    if (id != undefined) {
      this.preparacionService.delete(id).subscribe(
        data => {
          this.cargarPreparacion();
        }, err => {
          alert("Experiencia no borrada");
        }
      )
    }
  }
}
