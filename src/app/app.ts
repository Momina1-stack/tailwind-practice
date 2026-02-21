import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { GameContainer } from './game-container/game-container';
import { AppCasino } from './app-casino/app-casino';
import { Footer } from './footer/footer';
import { RightContent } from './right-content/right-content';
import { Rule } from "./rule/rule";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Rule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tailwind');
  
}

