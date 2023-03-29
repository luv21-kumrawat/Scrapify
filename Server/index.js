const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

// middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// routes import here
const UserRoutes= require('./routes/UserRoutes.js')
const TransRoutes = require('./routes/TransacRoutes')
const mapRoutes = require('./routes/MapRoutes')

app.get("/", (req, res) => {
  res.send("its working");
});

app.use('/auth',UserRoutes);
app.use('/transac', TransRoutes);
app.use('/map', mapRoutes)

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
    console.log(process.env.MONGO_URL);
  });

app.listen(process.env.PORT, () => {
  console.log(`app is listening on port ${process.env.PORT}`);
});
