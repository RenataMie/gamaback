const Paciente = require("../models/Paciente");

module.exports = {

    async index(req, res) {
        // try{
        
        const paciente = await Paciente.findAll();
        return res.json(paciente);
        // } catch (err) {
        //     return res.status(400).json({ error: err.message });
        // }

    },



    async show(req, res) {
        // try{
        const {id} = req.params;
        

        const cliente = await Paciente.findByPk(id, {
            include: {association: "endereco_paciente"}
        });

        return res.json(cliente);
        // } catch (err) {
        //     return res.status(400).json({ error: err.message });
        //   }
    },




    async store(req, res) {
        try{
        
        const {nome, cpf, tel, celular, data_nasc, email, tipo_sangue} = req.body;

        const paciente = await Paciente.create({nome, cpf, tel, celular, data_nasc, email,tipo_sangue});

        return res.json(paciente);
        } catch (err) {
            return res.status(400).json({ error: err.message });
          }
    },




    async update(req, res) {
        try{
        const {id} = req.params;
         const {nome, cpf, tel, celular, data_nasc, email, tipo_sangue, id_endereco} = req.body;
          
         
          const paciente = await Paciente.update({nome, cpf, tel, celular, data_nasc, email, tipo_sangue, id_endereco}, {where:{id}})
          .then(function(rowsUpdated) {
              res.json(rowsUpdated)
          })
        } catch (err) {
            return res.status(400).json({ error: err.message });
          }
          
     },




     async destroy(req, res) {
        try {
          const temp = await Paciente.findByPk(req.params.id);
    
          await temp.destroy();
    
          return res.json();
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }
}


