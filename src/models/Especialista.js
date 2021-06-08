const { Model, DataTypes} = require("sequelize");

class Especialista extends Model {
    static init(connection){
        super.init({
            registro: DataTypes.STRING,
            nome:DataTypes.STRING,
            tel:DataTypes.STRING,
            celular:DataTypes.STRING,
            email:DataTypes.STRING,
            
            
        }, { sequelize: connection})
    }
    static associate(models) {
        this.belongsTo(models.Profissoe, {foreignKey: 'id_profissao', as: "profissao_especialista"}),
        this.belongsTo(models.Endereco, {foreignKey: 'id_endereco', as: "endereco_especialista"}),
        this.hasMany(models.Atendimento, {foreignKey: 'id_especialista', as: "atendimentos"})
       
    }
}

module.exports = Especialista;