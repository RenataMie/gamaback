const  Paciente  = require("../../../__testes/app/models/paciente.test.js");

// const request = require('supertest');
// const app = require("../../src/app");
// const connection = require("../../src/database");
// const truncate = require("../utils/truncate");


describe("paciente", () => {

    it("testando propriedades", async() => {
        // let pac = new Paciente
        expect(Paciente.nome !== "").toBe(true);
        // expect(Paciente.id !== 0).toBe(true);
        
    })


    

    // nome: DataTypes.STRING,
    // cpf:DataTypes.STRING,
    // tel:DataTypes.STRING,
    // celular:DataTypes.STRING,
    // data_nasc:DataTypes.DATE,
    // email:DataTypes.STRING,
    // tipo_sangue:DataTypes.STRING,
    
        
    

})
