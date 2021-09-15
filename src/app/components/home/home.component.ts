import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.username = this.tokenStorageService.getUser();
  }

}
