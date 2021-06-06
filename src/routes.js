const express = require("express");
const PacienteController = require("./controllers/PacienteController");
const EnderecoController = require("./controllers/EnderecoController");

const routes = express.Router();

routes.get("/pacientes", PacienteController.index);
routes.get("/pacientes/:id", PacienteController.show);
routes.put("/pacientes/:id", PacienteController.update);
routes.post("/pacientes", PacienteController.store);

routes.get("/enderecos", EnderecoController.index);
routes.get("/enderecos/:end_id", EnderecoController.showId);
routes.post("/enderecos", EnderecoController.store);

routes.get("/", {message: "ok"})

module.exports = routes;