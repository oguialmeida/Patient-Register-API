const Patient = require("../model/patient");

// Function to list users
exports.list = async (_, res) => {
  try {
    const posts = await Patient.findAll({
      order: [["id", "DESC"]],
    });
    res.send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// Function to save users
exports.save = async (req, res) => {
  const {
    name,
    dateOfBirth,
    gender,
    address,
    phoneNumber,
    email,
    medicalHistory,
  } = req.body;

  try {
    const post = await Patient.create({
      name,
      dateOfBirth,
      gender,
      address,
      phoneNumber,
      email,
      medicalHistory,
    });
    res.send(post);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// Function to filter users
exports.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).send({ message: "Patient not found" });
    }
    res.send(patient);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// Function to delete a user
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).send({ message: "Patient not found" });
    }
    await patient.destroy();
    res.send({ message: "Patient deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// Function to update a user
exports.update = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    dateOfBirth,
    gender,
    address,
    phoneNumber,
    email,
    medicalHistory,
  } = req.body;

  try {
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).send({ message: "Patient not found" });
    }

    await patient.update({
      name,
      dateOfBirth,
      gender,
      address,
      phoneNumber,
      email,
      medicalHistory,
    });

    res.send(patient);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
