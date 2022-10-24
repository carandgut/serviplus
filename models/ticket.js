const { Schema, model } = require("mongoose");

const ticketSchema = Schema({
  titulo: String,
  codigo: { type: String, unique: true },
  fecha: String,
  tema: String,
  dependencia: { type: String, enum: ["secretaria de gobierno"] },
  asunto: { type: String, require: [true, "El Asunto es obligatorio"] },
  prioridad: String,
  estado: { type: String, enum: ["CREADO", "ABIERTO", "RESUELTO"] },
  cliente: { type: Schema.Types.ObjectId, ref: "cliente" },
})

const TicketModel = model ("ticket", ticketSchema)

module.export = TicketModel
