const Especialista = require("../models/Especialista");

module.exports = {

    async index(req, res) {
        try{
        const especialista = await Especialista.findAll();
        return res.json(especialista);
    }
        catch(error) {
            console.log(error)
        }
    },

    async show(req, res) {
        const {id} = req.params;
        

        const especialista = await Especialista.findByPk(id, {
            include: {association: "endereco_especialista"}
        });

        return res.json(especialista);
    },

    async store(req, res) {
        
        const {registro, nome, tel, celular,  email, id_profissao} = req.body;

        const especialista = await Especialista.create({registro, nome, tel, celular, email, id_profissao});

        return res.json(especialista);
    },

    async update(req, res) {
        const {id} = req.params;
         const {nome, cpf, tel, celular, data_nasc, email, tipo_sangue, id_endereco} = req.body;
          
         
          const paciente = await Paciente.update({nome, cpf, tel, celular, data_nasc, email, tipo_sangue, id_endereco}, {where:{id}})
          .then(function(rowsUpdated) {
              res.json(rowsUpdated)
          })
          
     },
}


