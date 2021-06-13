const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");
// const truncate = require("../utils/truncate");


describe("Endereco", () => {

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

    it("ERROR post novo endereco", async() => {

        const response = await request(app)
            .post("/enderecos")
            .send({
                cep: null,
                logradouro: "Vila Nossa Senhora das Neves",
                numero: null,
                bairro: "Bairro Estrela",
                cidade: "João Pessoa",
                uf: null
            });

            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
        
    })

    it("get endereco", async() => {

        const response = await request(app)
            .get("/enderecos")
           
        expect(response.statusCode).toEqual(200);
        expect(response.body[0].cidade).toEqual("João Pessoa");
        
    })

    //  it("ERROR get endereco", async() => {

    //     const response = await request(app)
    //         .get("/enderecoss")
        
    //     // console.log(response)
    //     expect(response.statusCode).toEqual(400);
    //     expect(response.body).toHaveProperty("error");
        
    // })
    

    it("get ID do endereco", async() => {

        const response = await request(app)
            .get("/enderecos/1")
        
        // console.log(response)
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(1);
        
    })

    // it("ERROR get ID do endereco", async() => {

    //     const response = await request(app)
    //         .get("/enderecos/0")
        
    //     // console.log(response)
    //     expect(response.statusCode).toEqual(400);
    //     expect(response.body).toHaveProperty("error");
        
    // })

    it("update endereco", async() => {

        const response = await request(app)
            .put("/enderecos/1")
            .send({
                cep: 544,
                logradouro: "Vila Nossa Senhora das Neves",
                numero: 1584,
                bairro: "Bairro Estrela",
                cidade: "Sao Paulo",
                uf: "SP"
            });
        
        expect(response.statusCode).toEqual(200);
        expect(response.ok).toBeTruthy();
        
        
    })


    it("ERROR update endereco", async() => {

        const response = await request(app)
            .put("/enderecos/1")
            .send({
                cep: 544,
                logradouro: "Vila Nossa Senhora das Neves",
                numero: 1584,
                bairro: "Bairro Estrela",
                cidade: "Sao Paulo",
                uf: null
            });
        
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
        
    })


    it("delete endereco", async() => {

        const response = await request(app)
            .del("/enderecos/1")
           
            expect(response.statusCode).toEqual(200);
            expect(response.ok).toBeTruthy();
        
    })



      it("ERROR delete endereco", async() => {

        const response = await request(app)
            .del("/enderecos/0")
        
        // console.log(response)
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
        
    })



    //homepage
    it("homepage", async() => {

        const response = await request(app)
            .get("/")
         
            expect(response.ok).toBeTruthy();
            expect(response.body).toHaveProperty("message");
        
    })



})
