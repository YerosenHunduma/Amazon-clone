// const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.SECRET_KEY);
// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });

    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send("something went wrong!");
  }
});
// - Listen command
// exports.api = functions.https.onRequest(app);
app.listen(5000, (err) => {
  if (!err) {
    console.log("server running on http://localhost:5000");
  }
});

// http://127.0.0.1:5001/yero-85426/us-central1/api
