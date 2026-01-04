import { Component } from '@angular/core';
import { Header } from "../app/header/header";
import { Navbar } from "../app/navbar/navbar";
import { Sidebar } from "../app/sidebar/sidebar";
import { RightContent } from "../app/right-content/right-content";
import { GameContainer } from "../app/game-container/game-container";
import { AppCasino } from "../app/app-casino/app-casino";
import { Footer } from "../app/footer/footer";

@Component({
  selector: 'app-dashboard',
  imports: [Header, Navbar, Sidebar, RightContent, GameContainer, AppCasino, Footer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
