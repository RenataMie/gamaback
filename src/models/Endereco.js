const {Model, DataTypes} = require("sequelize");

class Endereco extends Model {
    //metodo padrao para conectar com a base
    static init(connection){
        super.init({
            cep: DataTypes.INTEGER,
            logradouro:DataTypes.STRING,
            numero:DataTypes.INTEGER,
            bairro:DataTypes.STRING,
            cidade:DataTypes.STRING,
            uf:DataTypes.STRING,
            

        }, { sequelize: connection})
    }
    static associate(models) {
        this.hasMany(models.Paciente, {foreignKey: 'id_endereco', as: "pacientes"}),
        this.hasMany(models.Especialista, {foreignKey: 'id_endereco', as: "especialistas"})
    }

}

module.exports = Endereco;