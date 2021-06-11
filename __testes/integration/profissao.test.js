const request = require('supertest');
const app = require("../../src/app");
const connection = require("../../src/database");
// const truncate = require("../utils/truncate");


describe("Profissao", () => {
    afterAll(() => {
       connection.close();
    });

    beforeEach(() => {
        jest.setTimeout(30000);
      });

    it("post nova profissao", async() => {

        const response = await request(app)
            .post("/profissoes")
            .send({
                profissao: 'dentista'
            });

        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })


    it("get profissoes", async() => {

        const response = await request(app)
            .get("/profissoes")
           
        expect(response.statusCode).toEqual(200);
        expect(response.body[0].profissao).not.toBe(undefined);
        
        
    })

    it("get profissao pelo ID", async() => {

        const response = await request(app)
            .get("/profissoes/1")
           
        expect(response.statusCode).toEqual(200);
        // expect.objectContaining({
        //     id: expect.any(Number),
        //     cep: expect.any(Number),
        //     logradouro: expect.any(String),
        //     numero: expect.any(Number),
        //     bairro: expect.any(String),
        //     cidade: expect.any(String),
        //     uf: expect.any(String),
        //     createdAt: expect.any(Date),
        //     updatedAt: expect.any(Date)
        //      })
        })


        it("update profissao", async() => {

            const response = await request(app)
                .put("/profissoes/1")
                .send({
                    profissao: "cardiologista",
                });
    
            expect(response.ok).toBeTruthy();
            // expect(response.body.profissao).toMatch("cardiologista");
            
        })

        it("delete profissao", async() => {

            const response = await request(app)
                .del("/profissoes/1")
               
                expect(response.statusCode).toEqual(200);
                expect(response.ok).toBeTruthy();
            
        })
    
        
    

})
