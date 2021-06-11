require("dotenv").config({
    path:process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require('express');
const routes = require('./routes');



class App {
  constructor() {
    this.server = express();
    this.route();
  }

  route() {
    this.server.use(express.json());
    this.server.use(routes);
  }
}

module.exports = new App().server;