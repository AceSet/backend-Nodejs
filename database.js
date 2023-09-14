const Sequelize = require('sequelize');

module.exports  = new Sequelize('auth_dev', 'postgres', '123', {
  host: 'localhost',
  dialect:  'postgres' 
});
