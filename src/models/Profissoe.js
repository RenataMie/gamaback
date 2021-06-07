const {Model, DataTypes} = require("sequelize");

class Profissoe extends Model {
    //metodo padrao para conectar com a base
    static init(connection){
        super.init({
            profissao:DataTypes.STRING,
            
            

        }, { sequelize: connection})
    }
    static associate(models) {
        this.hasMany(models.Especialista, {foreignKey: 'id_profissao', as: "especialistas"})
    }

}

module.exports = Profissoe;