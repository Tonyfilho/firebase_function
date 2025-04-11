# 04ª Aula criação de funções e deploy


const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
//const db = admin.firestore();
const cors = require("cors")({origin: true});
import {Request, Response} from "express";




interface RandomNumberRequest extends Request {}
interface RandomNumberResponse extends Response {}

// http request 1
exports.randomNumber = functions.https.onRequest((req: RandomNumberRequest, res: RandomNumberResponse) => {
    cors(req, res, () => {
        const randomNumber: number = Math.round(Math.random() * 100) + 1;
        // res.json({randomNumber});
        res.send(`Random number: ${randomNumber}`);
    });
});
// http request 2, neste caso será um redirest
exports.toTheDojo = functions.https.onRequest((req: RandomNumberRequest, res: RandomNumberResponse) => {
    cors(req, res, () => {
         res.redirect("https://tonyfilhocurriculum.web.app/");
       
    });
});

# firebase deploy --only functions  
# firebase deploy --only functions:toTheDojo

