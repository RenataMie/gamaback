const {Model, DataTypes} = require("sequelize");

class Atendimento extends Model {
    //metodo padrao para conectar com a base
    static init(connection){
        super.init({
            data_agendamento: DataTypes.DATE,
            data_atendimento:DataTypes.DATE,
            hora_atendimento:DataTypes.STRING,
            valor:DataTypes.REAL,
            status:DataTypes.STRING,
            

        }, { sequelize: connection})
    }
    static associate(models) {
        this.belongsTo(models.Paciente, {foreignKey: 'id_paciente', as: "paciente_atendimento"}),
        this.belongsTo(models.Especialista, {foreignKey: 'id_especialista', as: "especialista_atendimento"})
    }

}

module.exports = Atendimento;