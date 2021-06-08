const Atendimento= require("../models/Atendimento");


module.exports = {

    async show(req,res) {
        const hoje = new Date().toISOString().slice(0,10)

        const atendimento= await Atendimento.findAll({
            where: {data_atendimento: hoje},
        }).then(res => res.id);
        return res.json(atendimento);
    },

    async index(req, res) {
        const atendimento = await Atendimento.findAll({
            include:[
                {association: "paciente_atendimento"},
                {association: "especialista_atendimento"}
            ] 
            
        });

        return res.json(atendimento);
    },

    async store(req, res) {
       
        const atendimento = Atendimento.create(req.body);

        return res.json(atendimento);

    }
};