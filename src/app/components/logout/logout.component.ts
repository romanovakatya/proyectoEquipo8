import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() : void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(['inicio']);
  }
}
