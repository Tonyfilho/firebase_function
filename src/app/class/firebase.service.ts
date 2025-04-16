import { Inject, Injectable } from '@angular/core';
import { Functions, httpsCallable } from 'firebase/functions';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(@Inject('FIREBASE_FUNCTIONS') private functions: Functions) {}

  /**A tipagem com dois parâmetros "{ name: string },string"  genéricos em httpsCallable<INPUT, OUTPUT>() não é para data e context, mas sim para:
INPUT: o tipo do dado que você vai enviar para a function (ou seja, o data que você passa),
OUTPUT: o tipo do dado que você espera receber da function (ou seja, o valor de res.data). */
  getHello = () => {
    const helloWorld = httpsCallable<{ name: string }, string>(
      this.functions,
      'sayHello'
    );    
    return from(helloWorld({ name: 'Tony' })).pipe(
      map((res) => {
        //  res.data = data; // Assuming the response has a 'data' property
        return res.data;
      })
    );
  };
}
