import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

// component.ts
activeIndex: number = 0;

setIndex(index: number) {
  this.activeIndex = index;
}



   // Cricket / Soccer / Tennis navbar
  activeTab: 'cricket' | 'soccer' | 'tennis' = 'cricket';
   // Cricket / Soccer / Tennis tab click
  setActive(tab: 'cricket' | 'soccer' | 'tennis') {
    this.activeTab = tab; // ✅ update the activeTab
  }

}
