require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// Step 1: Initial Sequelize instance without specifying a database
const sequelizeServer = new Sequelize('', DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres', // Change to 'mysql' if you're using MySQL
  logging: false,
});

(async () => {
  try {
    // Connect to the database server
    await sequelizeServer.authenticate();
    console.log('Connected to the database server.');

    // Step 2: Check if the database exists; create if it doesn’t
    await sequelizeServer.query(`CREATE DATABASE "${DB_NAME}"`)
      .then(() => console.log(`Database "${DB_NAME}" created successfully.`))
      .catch(error => {
        if (error.name === 'SequelizeDatabaseError' && error.parent.code === '42P04') {
          console.log(`Database "${DB_NAME}" already exists.`);
        } else {
          throw error;
        }
      });

  } catch (error) {
    console.error('Error during database check/creation:', error);
  }
})();

// Step 3: Reinitialize Sequelize with the created database
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres', // Adjust if needed for other databases
  logging: false,
});

module.exports = sequelize;
