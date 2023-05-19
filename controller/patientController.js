const Patient = require("../model/patient");

// Function to list users
exports.list = async (_, res) => {
  Patient.findAll({
    order: [["id", "DESC"]],
  })
    .then((posts) => res.send(posts))
    .catch((error) => console.error(error));
};

// Function to save users
exports.save = async (req, res) => {
  const {
    id,
    name,
    dateOfBirth,
    gender,
    address,
    phoneNumber,
    email,
    medicalHistory,
  } = req.body;

  Patient.create({
    id,
    name,
    dateOfBirth,
    gender,
    address,
    phoneNumber,
    email,
    medicalHistory,
  }).then((post) => res.send(post));
};

// Function to filter users
exports.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).send({ message: "patient not found" });
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
      return res.status(404).send({ message: "patient not found" });
    }
    await patient.destroy();
    res.send({ message: "patient deleted successfully" });
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
    let patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).send({ message: "Patient not found" });
    }

    patient.name = name;
    (patient.dateOfBirth = dateOfBirth),
      (patient.gender = gender),
      (patient.address = address),
      (patient.phoneNumber = phoneNumber),
      (patient.email = email),
      (patient.medicalHistory = medicalHistory);

    await patient.save();

    res.send(patient);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
