const { Router } = require("express");

const {
    crearCliente,
    getClientes,
    getCliente,
    modificarCliente,
    borrarCliente,
  } = require("../controller/cliente");

const routerCliente = Router();

routerCliente.post("", crearCliente);
routerCliente.get("", getClientes);
routerCliente.get("/:id", getCliente);
routerCliente.put("", modificarCliente);
routerCliente.delete("", borrarCliente);

module.exports = routerCliente