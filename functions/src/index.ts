/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

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