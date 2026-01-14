require("express-async-errors");
const express = require('express');
require('dotenv').config();
const errorHandler = require('./handlers/errorHandler');
const mongoose = require('mongoose');
const userRoutes = require("./modules/users/users.routes");

mongoose.connect(process.env.MONGO_CONNECTION, {}
).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
const app = express();
app.use(express.json());
const port = 4000;

//models initialize
require('./models/users.model');

//routes initialize
app.use("/api/users",userRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//error handler middleware written at the end after all routes
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});