import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { PreparacionComponent } from './component/preparacion/preparacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { HysComponent } from './component/hys/hys.component';
import { RedesComponent } from './component/redes/redes.component';
import { LoginComponent } from './component/login/login.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { DenegadoComponent } from './component/denegado/denegado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoArgProComponent } from './component/nav-bar/logoArgPro/logo-arg-pro/logo-arg-pro.component';
import { EditPreparacionComponent } from './component/preparacion/edit-preparacion/edit-preparacion.component';
import { EditHysComponent } from './component/hys/edit-hys/edit-hys.component';



export function playerFactory(): any {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    PreparacionComponent,
    HysComponent,
    RedesComponent,
    LoginComponent,
    ExperienciaComponent,
    ProyectosComponent,
    DenegadoComponent,
    LogoArgProComponent,
    EditPreparacionComponent,
    EditHysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgCircleProgressModule.forRoot({
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
