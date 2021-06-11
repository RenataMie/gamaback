const request = require('supertest');
const app = require("../../src/app");
const connection = require("../../src/database");
// const truncate = require("../utils/truncate");

// const  { Endereco }   = require("../../src/models/Endereco");

describe("Endereco", () => {
    afterAll(() => {
       connection.close();
    });

    it("post novo endereco", async() => {

        const response = await request(app)
            .post("/enderecos")
            .send({
                cep: 544,
                logradouro: "Vila Nossa Senhora das Neves",
                numero: 1584,
                bairro: "Bairro Estrela",
                cidade: "João Pessoa",
                uf: "PB"
            });

        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })


    it("get endereco", async() => {

        const response = await request(app)
            .get("/enderecos")
           
        expect(response.statusCode).toEqual(200);
        expect(response.body[0].cidade).not.toBe(undefined);
        
        
    })


    it("get ID do endereco", async() => {

        const response = await request(app)
            .get("/enderecos/1")
        
        // console.log(response)
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(1);
        
        
    })


})
