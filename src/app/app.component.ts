import { Component } from '@angular/core';
import {TokenStorageService} from "./_services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Libro-Systems';

  isLoggedIn = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }
  }

  /*logout() : void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }*/
}
