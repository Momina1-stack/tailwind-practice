import { NgClass,NgIf} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,          
  imports: [NgClass,NgIf],
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
}
