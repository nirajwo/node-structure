const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Mongo DB connection
mongoose.set('strictQuery', false);
const mongoDB = process.env.MONGO_CONNECTION_STRING;
(async () => {
  await mongoose.connect(mongoDB);
})().catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoute = require('./routes/user');

// User route
app.use('/user', userRoute);

app.get('/', (req, res) => {
  res.send('API server running!');
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});
