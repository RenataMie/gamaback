const { Model, DataTypes} = require("sequelize");

class Paciente extends Model {
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            cpf:DataTypes.STRING,
            tel:DataTypes.STRING,
            celular:DataTypes.STRING,
            data_nasc:DataTypes.DATE,
            email:DataTypes.STRING,
            tipo_sangue:DataTypes.STRING,
            
        }, { sequelize: connection})
    }
    static associate(models) {
        this.belongsTo(models.Endereco, {foreignKey: 'id_endereco', as: "endereco_paciente"}),
        this.hasMany(models.Atendimento, {foreignKey: 'id_paciente', as: "atendimentos"}),
        this.hasOne(models.Prontuario, {foreignKey: 'id_paciente', as: "prontuario"})
        
    }
}

module.exports = Paciente;