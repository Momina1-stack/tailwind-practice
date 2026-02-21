import { Component } from '@angular/core';
import { Modal } from '../modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rule',
  imports: [CommonModule],
  templateUrl: './rule.html',
  styleUrl: './rule.css',
})
export class Rule {
  isOpen = false;

  constructor(private modalService: Modal) {
    this.modalService.modalState$.subscribe(state => {
      this.isOpen = state;
    });
  }

  close() {
    this.modalService.close();
  }

}
