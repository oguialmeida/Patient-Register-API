const Sequelize = require("sequelize");
const db = require("../config/connect");

// Creating a table in database
const Patient = db.define("patient", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  medicalHistory: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

db
  // Will only create the table if it doesn't already exist in the database
  .sync({ force: false })
  .then(() => console.log("Tabela people criado com sucesso!"))
  .catch((error) => console.log("Erro ao criar tabela person:", error));

module.exports = Patient;
