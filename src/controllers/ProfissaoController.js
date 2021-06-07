const Profissoe= require("../models/Profissoe");


module.exports = {


    async index(req, res) {
        const profissao = await Profissoe.findAll();
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

    }
};