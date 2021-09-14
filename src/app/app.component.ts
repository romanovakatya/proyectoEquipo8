import { Component } from '@angular/core';
import {TokenStorageService} from "./_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Libro-Systems';

  isLoggedIn = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      this.username = user.username;

      //comprobar que funcione ese router,
      this.router.navigate(['home']);
    }else{
      //comprobar que funcione y ese también,
      this.router.navigate(['inicio']);
    }
  }

  logout() : void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
