import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./_components/_header/header.component";
import { FooterComponent } from "./_components/footer/footer.component";
import firebase from 'firebase/compat/app';
import 'firebase/compat/functions';
import { environment } from '../environment/environment';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  
  ngOnInit(): void {
  const app = firebase.initializeApp(environment.firebase);
  const localfunctions = firebase.app().functions('us-central1');
  const callable = localfunctions.httpsCallable('sayHello');
    
    callable({ name: 'Tony' }).then((res) => {
      console.log('Resposta no App:', res.data);
    });

  }
}
