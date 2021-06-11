const Profissoe= require("../models/Profissoe");


module.exports = {


    async index(req, res) {
        const profissao = await Profissoe.findAll({
            include: {association: "especialistas"}
        });
        return res.json(profissao);
    },

    async store(req, res) {
       
        const { profissao } = req.body;

        const [prof, created] = await Profissoe.findOrCreate({
            where: {profissao: profissao},
            defaults:{profissao}
        });

        console.log(profissao.id)
        console.log(created)
        if(created) {
            console.log(prof.id)
        }

        return res.json(prof);

    },

    async show(req, res) {
        try {
          const temp = await Profissao.findByPk(req.params.id,{
            include: { association: 'profissionais'}
          });
    
          return res.json(temp);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      },
    
      async update(req, res) {
        try {
          const temp = await Profissao.findByPk(req.params.id);
    
          await temp.update(req.body);
    
          return res.json({ temp });
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      },
    
      async destroy(req, res) {
        try {
          const temp = await Profissao.findByPk(req.params.id);
    
          await temp.destroy();
    
          return res.json();
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }
};