import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { GameContainer } from './game-container/game-container';
import { AppCasino } from './app-casino/app-casino';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [Header,Navbar,Sidebar,GameContainer,AppCasino,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tailwind');
  
}

