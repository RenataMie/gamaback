const Profissao= require("../models/Profissao");


module.exports = {


    async index(req, res) {
        const profissao = await Profissao.findAll();
        return res.json(profissao);
    },

    async store(req, res) {
       
        const { profissao } = req.body;

        const [prof, created] = await Profissao.findOrCreate({
            where: {profissao: profissao},
            defaults:{profissao}
        });

        console.log(profissao.id)
        console.log(created)
        if(created) {
            console.log(prof.id)
        }

        return res.json(prof);

    }
};