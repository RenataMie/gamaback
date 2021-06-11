const {models} = require("../../src/models");

module.exports = () => {
    return Promisse.all(Object.keys(models).map(key => {
        return models[key].destroy({ truncate: true, force: true });
    }));
};