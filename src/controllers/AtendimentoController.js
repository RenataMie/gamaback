const Atendimento= require("../models/Atendimento");

module.exports = {

    async show(req,res) {
        const diaHoje = new Date().getDate();
        const mesHoje =new Date().getMonth();

        const atendimento= await Atendimento.findAll({
            where: {data_atendimento: "diaHoje + mesHoje"},
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