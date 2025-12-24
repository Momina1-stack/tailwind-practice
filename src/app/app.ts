import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { GameContainer } from './game-container/game-container';
import { AppCasino } from './app-casino/app-casino';
import { Footer } from './footer/footer';
import { RightContent } from './right-content/right-content';


@Component({
  selector: 'app-root',
  imports: [Header,Navbar,Sidebar,RightContent,GameContainer,AppCasino,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tailwind');
  
}

