const functions = require('firebase-functions');
const express = require( "express") ;
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51LYSjOSF1pfjA9fqeNJmUpKFdNmJFYriozvKWIWKJB8QJiOzYh45VCVcNr6VrfcFRZBsEQ9BebCMmIIJSYsB1yfC00JYEADF62')
// API

const app = express() ;


app.use(cors({ origin: true }));
app.use(express.json());


app.get('/', (request,response) => response.status(200).send('hello world' ))

app.post('/payments/create', async(request,response) =>{
    const total = request.query.total;
    console.log('payment request',total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret:paymentIntent.clientSecret,
    });
})


exports.api = functions.https.onRequest (app)
//http://localhost:5001/clone-ddb27/us-central1/api