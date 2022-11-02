const { request, response } = require("express");
const {hashSync, genSaltSync, compareSync} = require ("bcryptjs")
const ClienteModel = require("../models/cliente");


// CREARCLIENTE
async function crearCliente(req = request,  res = response) {
  const { numDocumento, password } = req.body;

  const clienteEncontrado = await ClienteModel.findOne({
    numDocumento
  });

  //VALIDACION

  if (clienteEncontrado) {
    res.status(400).send({ mensaje: "El cliente ya existe" });
  } else {

    //El cliente no Existe

    
    const passwordEncrypted = hashSync(password, genSaltSync())

    req.body.password = passwordEncrypted

    ClienteModel.create(req.body)
      .then((clienteCreado) => {
        res.status(201).send({ mensaje: " se creo el cliente", clienteCreado });
      })
      .catch(() => {
        res.send({ mensaje: "no se logro crear el cliente" });
      });
  }
}
//CONSULTAR CLIENTE
async function getClientes(req = request, res = response) {
  const { id, email, numDocumento } = req.query;

  if (id || email || numDocumento){
    const cliente = await ClienteModel.findOne({$or: [{_id:id},{email},{numDocumento}] });
    return res.send(cliente)

  }else{

  const listaClientes = await ClienteModel.find();
    res.send(listaClientes);
}
  //console.log(compareSync ("12345", "$2a$10$L3ai48x0blKfxl6I6osTIONFGWKKgBaGd6d4FMHk4WS6YGcg7eaB6"))

  

  /*if (id) {
    const cliente = await ClienteModel.findById(id);
    res.send(cliente);
  } else {
    
  */
}

async function getCliente(req = request, res = response) {
  const { id } = req.params;
  const cliente = await ClienteModel.findOne({ email: id });
  res.send(cliente);
}
//MODIFICAR CLIENTE
async function modificarCliente(req = request, res = response){

const {id, password, ...cliente} = req.body

const passwordEncrypted = hashSync(password, genSaltSync())
cliente.password = passwordEncrypted

await ClienteModel.updateOne({_id:id}, cliente)
const clienteModificado = await ClienteModel.findById(id)
res.send(clienteModificado)
}

async function borrarCliente(req = request, res = response){

  const {id } = req.body

 const object = await ClienteModel.findByIdAndDelete(id)

 res.send(object)


}

module.exports = { crearCliente, getClientes, getCliente, modificarCliente, borrarCliente };
