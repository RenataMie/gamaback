const Especialista = require("../models/Especialista");

module.exports = {

    async index(req, res) {
        // try{
        const especialista = await Especialista.findAll({
            include: {association: "profissao_especialista"}
        });
        return res.json(especialista);
    // }
    //     catch (err) {
      return res.status(400).json({ error: err.message });
    //     }
    },




    async show(req, res) {
        // try{
        const {id} = req.params;
        

        const especialista = await Especialista.findByPk(id, {
            include: {association: "endereco_especialista"}
        });

        return res.json(especialista);
    // }  catch (err) {
      return res.status(400).json({ error: err.message });
        //     }
    },




    async store(req, res) {
        try{
        
        const {registro, nome, tel, celular,  email, id_profissao} = req.body;

        const especialista = await Especialista.create({registro, nome, tel, celular, email, id_profissao});

        return res.json(especialista);
        }  catch (err) {
            return res.status(400).json({ error: err.message });
            }
    },



    async update(req, res) {
        try {
        const {id} = req.params;
         const {nome, cpf, tel, celular, data_nasc, email, tipo_sangue, id_endereco} = req.body;
          
         
          const especialista = await Especialista.update({nome, cpf, tel, celular, data_nasc, email, tipo_sangue, id_endereco}, {where:{id}})
          .then(function(rowsUpdated) {
              res.json(rowsUpdated)
          })
        }  catch (err) {
            return res.status(400).json({ error: err.message });
            }
          
     },


     async destroy(req, res) {
        try {
          const temp = await Especialista.findByPk(req.params.id);
    
          await temp.destroy();
    
          return res.json();
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }
}


