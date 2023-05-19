const express = require("express");
const router = express.Router();

// Capturing requests from controller
const patientController = require("./controller/patientController");

// Creantig the patient main route
router
  .route("/patient")
  .post(function (req, res) {
    return patientController.save(req, res);
  })
  .get(function (req, res) {
    return patientController.list(req, res);
  });

router
  .route("patient/:id")
  .get(function (req, res) {
    return patientController.getById(req, res)
  })
  .put(function (req, res) {
    return patientController.update(req, res)
  })
  .delete(function (req, res) {
    return patientController.delete(req, res)
  })

module.exports = router
