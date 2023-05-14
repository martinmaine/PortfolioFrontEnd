import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HysService } from 'src/app/services/hys.service';
import { HySModel } from 'src/app/model/hys';

@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {
  form: FormGroup;
  hysmodel: HySModel[] = []

  constructor(private fb: FormBuilder,
    private shys: HysService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.fb.group({
      id: [''],
      nombre: [''],
      porcentaje: [''],
    });
  }

  ngOnInit(): void {

      const hysId = this.activatedRoute.snapshot.params['id'];
      this.shys.lista().subscribe(data => {
        this.hysmodel = data;
        //Una vez que accede a los datos, encuentra el elemento con la misma identificación
        //para parchear los campos de formulario con su información.
        const element = this.hysmodel.find(item => item.id === parseInt(hysId));
        this.form.patchValue({
          id: element?.id,
          nombre: element?.nombre,
          porcentaje: element?.porcentaje,
       });
      });
    }


    get Nombre() {
      return this.form.get("nombre")
    }

    get Porcentaje() {
      return this.form.get("porcentaje")
    }

    onEnviar() {
      const hys: HySModel = {
        id: parseInt(this.activatedRoute.snapshot.params['id']),
        nombre: this.form.value.nombre,
        porcentaje: this.form.value.porcentaje,
      };
      this.shys.edit(hys).subscribe(() => {
        console.log(hys);
      })
      alert("Habilidad cargada correctamente!")
      this.router.navigate(['home']);
    }

}
