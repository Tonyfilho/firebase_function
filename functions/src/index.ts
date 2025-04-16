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

// Callable Function, pode ser chamado pelo front-end, ou seja, o front-end chama a função e não o contrário
exports.sayHello = functions.https.onCall((data: any, context: any) => {
  console.log('Received data:', data.name);
  console.error('Received data:', data.name);
  const name = data.name;
  return `Hello ${name} `;
});
