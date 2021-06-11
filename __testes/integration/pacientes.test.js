const request = require('supertest');
const app = require("../../src/app");
const connection = require("../../src/database");
// const truncate = require("../utils/truncate");


describe("Paciente", () => {
    afterAll(() => {
       connection.close();
    });

    // beforeEach(() => {
    //     truncate();
    // });

    it("post novo paciente", async() => {

        const response = await request(app)
            .post("/pacientes")
            .send({
                cpf: '101.111.111-12',
                nome: 'Roberto da Silva',
                data_nasc: '1999-02-02',
                tel: '(11)10811-1111',
                celular: '(11)91191-1011',
                email: 'robertossilva@email.com',
                tipo_sangue: 'O+',
            });

        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })


    it("get paciente", async() => {

        const response = await request(app)
            .get("/pacientes")
           
        expect(response.statusCode).toEqual(200);
        expect(response.body[0].nome).not.toBe(undefined);
        
        
    })

    it("get paciente pelo ID", async() => {

        const response = await request(app)
            .get("/pacientes/1")
           
        expect(response.statusCode).toEqual(200);
        expect.objectContaining({
            id: expect.any(Number),
            cep: expect.any(Number),
            logradouro: expect.any(String),
            numero: expect.any(Number),
            bairro: expect.any(String),
            cidade: expect.any(String),
            uf: expect.any(String),
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date)
             })
        })


        it("update paciente", async() => {

            const response = await request(app)
                .put("/pacientes/1")
                .send({
                    cpf: '101.111.111-12',
                    nome: 'Roberto da Silva',
                    data_nasc: '1999-02-02',
                    tel: '(11)10811-2222',
                    celular: '(11)91191-222',
                    email: 'robertosantossilva@email.com',
                    tipo_sangue: 'O+',
                });
    
            expect(response.ok).toBeTruthy();
            expect(response.statusCode).toEqual(200);
            
        })

        it("delete paciente", async() => {

            const response = await request(app)
                .del("/pacientes/1")
               
                expect(response.statusCode).toEqual(200);
                expect(response.ok).toBeTruthy();
            
        })
    
        
    

})
