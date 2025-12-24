import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-right-content',
  imports: [NgClass],
  templateUrl: './right-content.html',
  styleUrl: './right-content.css',
})
export class RightContent {

  bottomBar =[
    'Cricket', 'Tennis','Soccer','Horse Racing'
  ]
  activeBottom: string = 'Cricket';

  setActivetab(bottomBar: string){
    this.activeBottom = bottomBar;
  }
  



  // Horizontal nav
  navItems = [
    'Popular', 'Teen Patti', 'Lucky 7', 'Dragon Tiger', 'Baccarat',
    'Abdar Bahar', 'Poker', 'Bollywood', 'Region', 'Other', 'Virtual'
  ];
  activeNav: string = 'Popular';


  // Horizontal nav click
  setActiveNav(nav: string) {
    this.activeNav = nav;  // update the activeNav
  }
}
