const database = require('./database');

const patientService = require('./patientService');

patientService.addPatient('Doe', 'John');

const patientsList = patientService.getPatientList();
console.log(patientsList);