import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  loginForm = this.fb.group({
    username: ['maineadmin', [Validators.required, Validators.minLength(7)]],
    password: ['Admin2023', [Validators.required, Validators.minLength(9)]],
  });

  loginError: string = "";


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) {
     };


  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;

    if (this.loginForm.valid && username == "maineadmin" && password == "Admin2023") {
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData)
        },
        error: (errorData) => {
          console.error(errorData)
        this.loginError= errorData;
        },
        complete: () => {
          console.log("Login completo");
            this.router.navigateByUrl('/home');
            this.loginForm.reset();
        },
      }
      )
    }
    else {
      console.error("Login incorrecto");
      this.router.navigateByUrl('/denegado')
    }

  }

/*   if (this.loginForm.valid && username == "maineadmin" && password == "Admin2023") {
        console.log("Login completo");
          this.router.navigateByUrl('/home');
          this.loginForm.reset();
      }
  else {
    console.error("Login incorrecto");
    this.router.navigateByUrl('/denegado')
  }
} */

  saveLogin() {
    let data = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };

    sessionStorage.setItem(JSON.stringify(data.username), JSON.stringify(data.password));
  }

  public logOut() {
    sessionStorage.removeItem('')
  }

  public isUserLogged(): boolean {
    return sessionStorage.getItem("username") !== null;}

}

