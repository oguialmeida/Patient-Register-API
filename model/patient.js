const Sequelize = require("sequelize");
const sequelize = require("../config/connect");

// Creating a table in the database
const Patient = sequelize.define("patients", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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
    validate: {
      isEmail: true,
    },
  },
  medicalHistory: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

sequelize.sync()
  .then(() => console.log("Table 'patient' created successfully!"))
  .catch((error) => console.log("Error creating 'patient' table:", error));

module.exports = Patient;
