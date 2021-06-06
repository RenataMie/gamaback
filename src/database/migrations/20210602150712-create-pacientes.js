'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('pacientes', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       nome: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       cpf:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       tel:{
        type: Sequelize.STRING,
        allowNull: true,
       },
       celular: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       data_nasc:{
        type: Sequelize.DATEONLY,
        allowNull: false,
       },
       email: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       tipo_sangue: {
        type: Sequelize.STRING,
        allowNull: true,
       },
       id_endereco: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: "enderecos", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
       created_at: {
         type:Sequelize.DATE,
         allowNull: false,
       },
       updated_at: {
        type:Sequelize.DATE,
        allowNull: false,
      },

       });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('pacientes');
   
  }
};


