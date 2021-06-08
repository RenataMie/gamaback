const { sequelize } = require("../models/Atendimento");
const Atendimento= require("../models/Atendimento");


module.exports = {

    async show(req,res) {
        const hoje = new Date()

        const atendimento= await Atendimento.findAll({
            where: sequelize.where(sequelize.fn('date', sequelize.col('data_atendimento')), "=", hoje.toISOString().slice(0,10))
        })
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