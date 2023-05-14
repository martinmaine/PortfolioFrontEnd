import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PreparacionModel } from 'src/app/model/preparacion';
import { PreparacionService } from 'src/app/services/preparacion.service';

@Component({
  selector: 'app-edit-preparacion',
  templateUrl: './edit-preparacion.component.html',
  styleUrls: ['./edit-preparacion.component.css']
})
export class EditPreparacionComponent implements OnInit {
  form: FormGroup;
  curso: PreparacionModel[] = []

  constructor(private fb: FormBuilder,
    private sCurso: PreparacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.fb.group({
      id: [''],
      curso: [''],
      institucion: [''],
    });
  }

  ngOnInit(): void {
    //Obtengo el curso para editar desde la base de datos usando el parámetro id de la ruta
      const cursoId = this.activatedRoute.snapshot.params['id'];
      this.sCurso.lista().subscribe(data => {
        this.curso = data;
        //Una vez que accede a los datos, encuentra el elemento con la misma identificación
        //para parchear los campos de formulario con su información.
        const element = this.curso.find(item => item.id === parseInt(cursoId));
        this.form.patchValue({
          id: element?.id,
          curso: element?.curso,
          institucion: element?.institucion,
       });
      });
    }


    get Curso() {
      return this.form.get("curso")
    }

    get Institucion() {
      return this.form.get("institucion")
    }

    onEnviar() {
      const curso: PreparacionModel = {
        id: parseInt(this.activatedRoute.snapshot.params['id']),
        curso: this.form.value.curso,
        institucion: this.form.value.institucion,
      };
      this.sCurso.edit(curso).subscribe(() => {
        console.log(curso);
      })
      alert("Curso cargado correctamente!")
      this.router.navigate(['home']);
    }

}
