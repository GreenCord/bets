require('dotenv').config();
console.log('Using config.js...');
module.exports = {
  development: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPW,
    database: process.env.MYSQLDB,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPW,
    database: process.env.MYSQLDB,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.JDBUSER,
    password: process.env.JDBPW,
    database: process.env.JDBDB,
    host: process.env.JDBHOST,
    dialect: 'mysql',
    use_env_variable: process.env.JAWSDB_URL
  }
};