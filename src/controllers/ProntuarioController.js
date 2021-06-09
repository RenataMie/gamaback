const Prontuario= require("../models/Prontuario");


module.exports = {
    async show(req, res) {

        const {id}= req.params
        
        const profissao = await Prontuario.findOne({
            where:{id_paciente: id},
            include: {association: "paciente_prontuario"}
        });
        return res.json(profissao);
    },



    async index(req, res) {

        const profissao = await Prontuario.findAll({
            include: {association: "paciente_prontuario"}
        });
        return res.json(profissao);
    },

    async store(req, res) {

        const {id_paciente} = req.params 
        const { data_abertura} = req.body;

        const prontuario = await Prontuario.create({
            data_abertura, id_paciente
          });

        return res.json(prontuario);

    }
};