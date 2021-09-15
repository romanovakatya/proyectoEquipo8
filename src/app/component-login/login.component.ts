import {Component, OnInit} from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {HttpResponse} from "@angular/common/http";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    password: null,
    username: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const {username, password} = this.form;

    this.authService.login(username, password)
      .pipe(first())
      .subscribe(
      (data: HttpResponse<any>) => {
        console.log(data.headers);
        console.log(data.headers.get('Authorization'));
        this.tokenStorage.saveToken(data.headers.get('Authorization'));
        this.tokenStorage.saveUser(this.form.username);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },

      error => {
        this.errorMessage = error.error.message;
        console.log(error);
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
