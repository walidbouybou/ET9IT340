const database = require('./database');
function insertPatient(patient) {
  database.patients.push(patient);
  console.log("Patients in database:", database.patients);
}

module.exports = { insertPatient };
