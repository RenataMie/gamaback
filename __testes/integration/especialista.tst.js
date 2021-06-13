const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");


describe("Especialista", () => {
   

    it("post novo especialista", async() => {

        const response = await request(app)
            .post("/especialista")
            .send({
                registro: "2222-SP",
                nome: "Maria Aparecida da Silva",
                tel: "1199987",
                celular: "1199999",
                email: "maria@medica.com",
                id_profissao: 1
            });

        expect(response.statusCode).toEqual(200);
        expect(response.id !== 0).toBe(true);
        
    })

    it("ERROR post novo especialista", async() => {

        const response = await request(app)
            .post("/especialista")
            .send({
                registro: null,
                nome: null,
                celular: '11922334459',
                telefone: '11922234567',
                email: 'araoo@example.com',
            });

            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
        
    })


    // it("get especialistas", async() => {

    //     const response = await request(app)
    //         .get("/especialista")
           
    //     expect(response.statusCode).toEqual(200);
    //     expect(response.body[0].nome).toEqual('Aarao Andrade Napoleao Lima');
    
    // })



    // it("get especialista pelo ID", async() => {

    //     const response = await request(app)
    //         .get("/especialista/1")
           
    //     expect(response.statusCode).toEqual(200);
    //     })

    // it(" ERROR get profissao pelo ID", async() => {

    //         const response = await request(app)
    //             .get("/profissoes/1")
               
    //             expect(response.statusCode).toEqual(400);
    //             expect(response.body).toHaveProperty("error");
    //     })




    // it("update especialista", async() => {

    //         const response = await request(app)
    //             .put("/especialista/1")
    //             .send({
    //                 registro: '194528-SP',
    //                 nome: 'Aarao Andrade Napoleao Lima',
    //                 tel: '1192220000',
    //                 celular: '11922331111',
    //                 email: 'araoo@example.com',
    //             });
    
    //         expect(response.ok).toBeTruthy();
    //         expect(response.statusCode).toEqual(200);
            
    //     })

    
        // it("ERROR update especialista", async() => {

        //     const response = await request(app)
        //         .put("/especialista/1")
        //         .send({
        //             registro: null,
        //             nome: null,
        //             celular: '11922331111',
        //             tel: '1192220000',
        //             email: 'araoo@example.com',
        //         });
    
        //         expect(response.statusCode).toEqual(400);
        //         expect(response.body).toHaveProperty("error");
            
        // })




        // it("delete especialista", async() => {

        //     const response = await request(app)
        //         .del("/especialista/1")
               
        //         expect(response.statusCode).toEqual(200);
        //         expect(response.ok).toBeTruthy();
            
        // })
    
        // it("ERROR delete especialista", async() => {

        //     const response = await request(app)
        //         .del("/especialista/0")
               
        //         expect(response.statusCode).toEqual(400);
        //         expect(response.body).toHaveProperty("error");
            
            
        // })
        
    

})
