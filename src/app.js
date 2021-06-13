require("dotenv").config({
    path:process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require('express');
const cors = require('cors')
const routes = require('./routes');



class App {
  constructor() {
    this.server = express();
    this.route();
    this.cors();
  }

  route() {
    this.server.use(express.json());
    this.server.use(routes);
  }

  cors(){
    this.server.use(cors())
  }
}

module.exports = new App().server;