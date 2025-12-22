import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-casino',
  imports: [NgClass],
  templateUrl: './app-casino.html',
  styleUrl: './app-casino.css',
})
export class AppCasino {
  // Horizontal nav
  navItems = [
    'Popular', 'Teen Patti', 'Lucky 7', 'Dragon Tiger', 'Baccarat',
    'Abdar Bahar', 'Poker', 'Bollywood', 'Region', 'Other', 'Virtual'
  ];
  activeNav: string = 'Popular';


  // Horizontal nav click
  setActiveNav(nav: string) {
    this.activeNav = nav;  // ✅ update the activeNav
  }


}
