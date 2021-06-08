const Endereco= require("../models/Endereco");

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

    }
};