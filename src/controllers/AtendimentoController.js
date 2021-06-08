const Atendimento= require("../models/Atendimento");

module.exports = {

    async showId(req,res) {
        const endereco = await Endereco.findOne({
            where: {},
            order: [ [ 'id', 'DESC' ]],
        }).then(res => res.id);
        return res.json(endereco);
    },

    async index(req, res) {
        const endereco = await Endereco.findAll();

        return res.json(endereco);
    },

    async store(req, res) {
       
        const atendimento = Atendimento.create(req.body);

        return res.json(atendimento);

    }
};