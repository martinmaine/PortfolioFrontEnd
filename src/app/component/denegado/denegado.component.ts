import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-denegado',
  templateUrl: './denegado.component.html',
  styleUrls: ['./denegado.component.css']
})
export class DenegadoComponent {

    // Animación
    options1: AnimationOptions = {
      path: '/assets/tinchoDev.json',
      loop: true,
      autoplay: true,
    };

}
