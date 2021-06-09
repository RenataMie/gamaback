const {Model, DataTypes} = require("sequelize");

class Prontuario extends Model {
    //metodo padrao para conectar com a base
    static init(connection){
        super.init({
            data_abertura:DataTypes.DATE,
            
            

        }, { sequelize: connection, createdAt:false, updatedAt:false})
    }
    static associate(models) {
        this.belongsTo(models.Paciente, {foreignKey: 'id_paciente', as: "paciente_prontuario"})
    }

}

module.exports = Prontuario;