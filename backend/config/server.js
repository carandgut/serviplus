const express = require("express");
const conexionDB = require("./database");

class Server {
  constructor() {
    this.port = 3000;
    this.app = express();
    this.app.use(express.json());
    this.app.listen(this.port, () => {
      console.log("se esta ejecutando la app por el puerto " + this.port);
    });
    this.routes();
    conexionDB();
  }

  routes() {
    this.app.use("/cliente",  require("../routes/cliente"))
  }
}

module.exports = Server;
