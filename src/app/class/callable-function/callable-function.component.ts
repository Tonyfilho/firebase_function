import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-callable-function',
  imports: [CommonModule, ],
  templateUrl: './callable-function.component.html',
  styleUrl: './callable-function.component.css'
})
export class CallableFunctionComponent {
localHello!: string;
isModalOpen = true;
fucntionsService = inject(FirebaseService);




getHello() {
 this.fucntionsService.getHello().subscribe({
  next: (res) => {
    this.localHello = res;
    console.log('res', res);
  },
  error: (err) => {
    console.error('Error:', err);
  },
  complete: () => {
    console.log('Request completed');
  }
 });
}

}
