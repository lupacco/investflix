const Sequelize = require("sequelize"); //carregando a classe sequelize
const database = require("../db"); //carregamos o objeto database, usando esse objeto vamos criar nosso modelo de cliente


const Customer = database.define("customer", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  tel: {
    type: Sequelize.STRING(12),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(12),
    allowNull: false,
  },
  birthdate: {
    type: Sequelize.STRING(12),
    allowNull: false,
  },
  sex: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
});

module.exports = Customer;
