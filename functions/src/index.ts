const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
//const db = admin.firestore();
const cors = require('cors')({ origin: true });
import { Request, Response } from 'express';

interface RandomNumberRequest extends Request {}
interface RandomNumberResponse extends Response {}

// http request  pode ser chamado pelo postman ou pelo front-end, ou direto no navegador, copiando o link da url do firebase lá console firebase
// http request 1, neste caso será um redirest
exports.randomNumber = functions.https.onRequest(
  (req: RandomNumberRequest, res: RandomNumberResponse) => {
    cors(req, res, () => {
      const randomNumber: number = Math.round(Math.random() * 100) + 1;
      // res.json({randomNumber});
      res.send(`Random number: ${randomNumber}`);
    });
  }
);
// http request 2, neste caso será um redirest
exports.toTheDojo = functions.https.onRequest(
  (req: RandomNumberRequest, res: RandomNumberResponse) => {
    cors(req, res, () => {
      res.redirect('https://tonyfilhocurriculum.web.app/');
    });
  }
);

/* OBS: Callable function precisa se chamanda no front-end com o firebase callable function.
Callable não se retorna o Data, ao contrario do Request Functions onde retornamos o RESPONSE
Neste caso, o retorno é feito pelo firebase, e não pelo código.
Callable function não precisa de cors, pois o firebase já faz isso para nós.
*/

/**
 * Data serve para passar dados para a função, no caso o nome, ou seja vem do Front-end.
 * Context serve para passar o contexto da função, no caso o usuário que está chamando a função
 */
exports.sayHello = functions.https.onCall((data: any, context: any) => {
  return `Hello ${data.name} `;
});
