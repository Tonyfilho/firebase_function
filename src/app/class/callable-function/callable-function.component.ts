import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { FirebaseFunctionsService } from '../../firebase-services/firebase-functions.service';


@Component({
  selector: 'app-callable-function',
  imports: [CommonModule, ],
  templateUrl: './callable-function.component.html',
  styleUrl: './callable-function.component.css'
})
export class CallableFunctionComponent {
localHello!: string;
isModalOpen = true;
//fucntionsService = inject(FirebaseService);
fucntionsFunctionsService = inject(FirebaseFunctionsService);




getHello() {
 this.fucntionsFunctionsService.sayHello().subscribe({
  next: (res) => {
    this.localHello = res;
    console.log('res no CallableFunctionComponent ', res);
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
