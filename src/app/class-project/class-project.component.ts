import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-project',
  imports: [CommonModule,],
  templateUrl: './class-project.component.html',
  styleUrl: './class-project.component.css'
})
export class ClassProjectComponent {
  isModalOpen = false;



  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
}
