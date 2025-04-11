import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [CommonModule, ],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
localHello!: string;
isModalOpen = true;


openModal() {
  this.isModalOpen = false;
}
closeModal() {
  this.isModalOpen = true;
}
getHello() {
throw new Error('Method not implemented.');
}

}
