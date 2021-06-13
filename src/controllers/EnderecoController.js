const Endereco= require("../models/Endereco");

module.exports = {

    async showId(req,res) {
      // try{
        const endereco = await Endereco.findOne({
            where: {},
            order: [ [ 'id', 'DESC' ]],
        }).then(res => res.id);
        return res.json(endereco);
      // } catch (err) {
      //   return res.status(400).json({ error: err.message });
      // }
    },




    async index(req, res) {
      // try{
        const endereco = await Endereco.findAll();

        return res.json(endereco);
      // } catch (err) {
      //   return res.status(400).json({ error: err.message });
      // }
    },




    async store(req, res) {
       try{
        const { cep, logradouro, numero, bairro, cidade, uf} = req.body;

        const [endereco, created] = await Endereco.findOrCreate({
            where: {cep: cep, logradouro: logradouro,  numero: numero, bairro: bairro, cidade: cidade, uf: uf},
            defaults:{cep, logradouro, numero, bairro, cidade, uf}
        });

        console.log(endereco.id)
        console.log(created)
        if(created) {
            console.log(endereco.id)
        }

        return res.json(endereco);
       } catch (err) {
        return res.status(400).json({ error: err.message });
      }

    },




    async update(req, res) {
        try {
          const temp = await Endereco.findByPk(req.params.id);
    
          await temp.update(req.body);
    
          return res.json({ temp });
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      },



    
      async destroy(req, res) {
        try {
          const temp = await Endereco.findByPk(req.params.id);
    
          await temp.destroy();
    
          return res.json();
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }
};