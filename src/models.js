const Sequelize = require('sequelize');
const config = require('../config/default');

let sequelize = new Sequelize(config.database.DATABASE, config.database.USERNAME, config.database.PASSWORD, {
  host: config.database.HOST,
  dialect: 'postgres',
  operatorsAliases: false,
    port: 5432,
  
    // dialectOptions: {
    //   ssl: true
    // },

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

User.sync({force: true});

module.exports = sequelize;

