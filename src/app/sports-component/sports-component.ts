import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-component',
  imports: [CommonModule],
  templateUrl: './sports-component.html',
  styleUrl: './sports-component.css',
})
export class SportsComponent {

  activeTab: 'odds' | 'betlist' = 'odds';

  setTab(tab: 'odds' | 'betlist') {
    this.activeTab = tab;
  }

  activeTabb: 'popular' | 'match odds' | 'tied match'| 'all market' = 'popular';

  setActive(tab: 'popular' | 'match odds' | 'tied match'| 'all market') {
    this.activeTabb = tab;
  }
}
