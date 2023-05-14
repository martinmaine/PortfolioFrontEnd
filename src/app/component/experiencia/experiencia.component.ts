import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ExperienciaModel } from 'src/app/model/experiencia';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent {
  experiencia: ExperienciaModel[] = [];
  form: FormGroup;
  puesto: string = '';
  descripcion: string = '';
  userLoginOn: boolean = false;

constructor(
  private experienciaService: ExperienciaService,
  private loginService: LoginService,
  private aRoute: ActivatedRoute,
  private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      puesto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn: boolean) => {
        this.userLoginOn = userLoginOn;
      }
    });
  this.cargarExperiencia();
    const experienciaId = this.aRoute.snapshot.params['id'];
    this.experienciaService.lista().subscribe(data => {
      this.experiencia = data;
      const element = this.experiencia.find(item => item.id === parseInt(experienciaId));
      this.form.patchValue({
        id: element?.id,
        puesto: element?.puesto,
        descripcion: element?.descripcion,
      });
    }
  )}


  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(
      data => { this.experiencia = data }
    )
  }

  get Puesto() {
    return this.form.get("puesto")
  }

  get Descripcion() {
    return this.form.get("descripcion")
  }

  onCreate(): void {
    const experiencia = new ExperienciaModel(this.puesto, this.descripcion);
    this.experienciaService.save(experiencia).subscribe(data => {
      alert("Operación exitosa");
      window.location.reload();
    }, err => {
      alert("Ups! No pudimos realizar la carga. Intente nuevamente más tarde");
      this.form.reset();
    });
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.onCreate();
    } else {
      alert("Ups! No pudimos realizar la carga. Intente nuevamente más tarde");
      this.form.markAllAsTouched();
    }
  }

  deleteBtn(id?: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("Experiencia no borrada");
        }
      )
    }
  }



}
