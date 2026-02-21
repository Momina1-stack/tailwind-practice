import { NgClass,NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Modal } from '../modal';

@Component({
  selector: 'app-header',
  standalone: true,          
  imports: [NgClass, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isSearchOpen: boolean = false;

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  closeSearch() {
    this.isSearchOpen = false;
  }

  // login button
  showLoginForm = false;

  openLogin() {
    this.showLoginForm = true;
  }

  closeLogin() {
    this.showLoginForm = false;
  }


  constructor(private modalService: Modal) {}

  openModal() {
    this.modalService.open();
  }
}
