const mongoose = require("mongoose");

//1. conectarnos
const conexionDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/serviplus")
    .then(() => {
      console.log("Se conecto con la base de datos!");
    })
    .catch(() => {
      console.log("Hubo un error en la conexion!");
    });
}

module.exports = conexionDB;
