import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PreparacionComponent } from './component/preparacion/preparacion.component';
import { LoginComponent } from './component/login/login.component';
import { DenegadoComponent } from './component/denegado/denegado.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { EditPreparacionComponent } from './component/preparacion/edit-preparacion/edit-preparacion.component';
import {EditHysComponent} from './component/hys/edit-hys/edit-hys.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'preparacion', component: PreparacionComponent },
  { path: 'experiencia', component: ExperienciaComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'denegado', component: DenegadoComponent},
  { path: 'editarPreparacion/:id', component: EditPreparacionComponent},
  { path: 'editarHys/:id', component: EditHysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
