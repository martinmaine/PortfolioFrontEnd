import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  options: AnimationOptions = {
    path: '/assets/fs.json',
    loop: false,
    autoplay: true,
  };

  options1: AnimationOptions = {
    path: '/assets/tinchoDev.json',
    loop: true,
    autoplay: true,
  };

  download() {
    location.href = './../../../assets/MartinMaine.pdf';
  }
}
