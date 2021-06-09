// onde vai fazer a conexao com a base, mas antes precisa deixar no config 
//as credenciais de acesso. 

const Sequelize = require ("sequelize");
const dbConfig = require("../config/database");

const Paciente = require("../models/Paciente");
const Endereco = require("../models/Endereco");
const Profissoe = require("../models/Profissoe");
const Especialista= require("../models/Especialista");
const Atendimento = require("../models/Atendimento");
const Prontuario = require("../models/Prontuario");

const connection = new Sequelize(dbConfig);

Paciente.init(connection);
Endereco.init(connection);
Profissoe.init(connection);
Especialista.init(connection);
Atendimento.init(connection);
Prontuario.init(connection);

Paciente.associate(connection.models);
Endereco.associate(connection.models);
Profissoe.associate(connection.models);
Especialista.associate(connection.models);
Atendimento.associate(connection.models);
Prontuario.associate(connection.models);


module.exports = connection;