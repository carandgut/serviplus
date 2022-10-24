const ClienteModel = require("../models/cliente")
const conexionDB = require  ("../config/database")

conexionDB ()

//implementar el caso de uso

const ClienteModel = require("../models/cliente");

const cliente1 = {
  tipoDocumento: "CC",
  numDocumento: "6391734",
  nombre: "Carlos",
  apellido: "Gutierrez",
  email: "carandgut1981@hotmail.com",
  telefonoContacto: "3173021909",
  password: "Tauro1981.30",
};

ClienteModel.create(cliente1)
  .then((respuesta) => {
    console.log("Se inserto el cliente" +respuesta.nombre)
  })
  .catch(() => {
    console.log("Hubo un error al insertar el cliente")
  });
