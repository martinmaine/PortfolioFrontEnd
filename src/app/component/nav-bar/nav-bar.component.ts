import { LoginService } from 'src/app/services/auth/login.service';
import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userLoginOn: boolean = false;

  constructor (private loginService:LoginService) {}

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe ({
      next: (userLoginOn) => {
        this.userLoginOn= userLoginOn;
      }
    })
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }



  goLogin() {
    location.href = 'login';
  }

  options: AnimationOptions = {
    path: '/assets/logo.json',
    loop: false,
    autoplay: true,
  };

}
