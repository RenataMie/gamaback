const express = require("express");
const PacienteController = require("./controllers/PacienteController");
const EnderecoController = require("./controllers/EnderecoController");
const ProfissaoController = require("./controllers/ProfissaoController");
const EspecialistaController = require("./controllers/EspecialistaController");
const AtendimentoController = require("./controllers/AtendimentoController");
const ProntuarioController = require("./controllers/ProntuarioController");


const routes = express.Router();

routes.get("/pacientes", PacienteController.index);
routes.get("/pacientes/:id", PacienteController.show);
routes.put("/pacientes/:id", PacienteController.update);
routes.post("/pacientes", PacienteController.store );

routes.get("/enderecos", EnderecoController.index);
routes.get("/enderecos/:end_id", EnderecoController.showId);
routes.post("/enderecos", EnderecoController.store);

routes.get("/profissoes", ProfissaoController.index);
routes.post("/profissoes", ProfissaoController.store);


routes.get("/especialista", EspecialistaController.index);
routes.post("/especialista", EspecialistaController.store);


routes.get("/atendimentos", AtendimentoController.index);
routes.get("/atendimentos/hoje", AtendimentoController.show);
routes.post("/atendimentos", AtendimentoController.store);

routes.get("/prontuarios", ProntuarioController.index);
routes.get("/prontuarios/:id", ProntuarioController.show);
routes.post("/prontuarios", ProntuarioController.store);




routes.get("/", (req,res) => {
    res.send({"message":"ok"})
})

module.exports = routes;