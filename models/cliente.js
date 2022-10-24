const {Schema, model} = require("mongoose");

// 1. definir un schema
  
  const clienteSchema = Schema({
    tipoDocumento: String,
    numDocumento: String,
    nombre: String,
    apellido: String,
    email: String,
    telefonoContacto: String,
    password: String,
  })
  
  // 2.  crear el modelo
  
  const ClienteModel = mongoose.model("cliente", clienteSchema)
  module.exports = ClienteModel