import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";
import { GameContainer } from "../game-container/game-container";
import { AppCasino } from "../app-casino/app-casino";
import { Footer } from "../footer/footer";
import { Rule } from "../rule/rule";
import { SportsComponent } from "../sports-component/sports-component";

@Component({
  selector: 'app-sports',
  imports: [Header, Navbar, Sidebar, GameContainer, AppCasino, Footer, Rule, SportsComponent],
  templateUrl: './sports.html',
  styleUrl: './sports.css',
})
export class Sports {
  //   gameItems = [
  //   'Popular', 'Match Odds', 'Tied Match', 'All Market', ];
  // gameItems: string = 'Popular';


  // // Horizontal nav click
  // setActiveItems(nav: string) {
  //   this.activeNav = nav;  // update the activeNav
  // }

}
