// onde vai fazer a conexao com a base, mas antes precisa deixar no config 
//as credenciais de acesso. 

const Sequelize = require ("sequelize");
const dbConfig = require("../config/database");

const Paciente = require("../models/Paciente");
const Endereco = require("../models/Endereco");
const Profissao = require("../models/Profissao");
const Especialista= require("../models/Especialista");

const connection = new Sequelize(dbConfig);

Paciente.init(connection);
Endereco.init(connection);
Profissao.init(connection);
Especialista.init(connection);

Paciente.associate(connection.models);
Endereco.associate(connection.models);
Profissao.associate(connection.models);
Especialista.associate(connection.models);


module.exports = connection;