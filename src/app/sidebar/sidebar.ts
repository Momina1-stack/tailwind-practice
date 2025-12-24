import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass,NgIf],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isOpen = false;

toggleDiv() {
  this.isOpen = !this.isOpen;
}

  Open = false;

togglefunction() {
  this.Open = !this.Open;
}



}
