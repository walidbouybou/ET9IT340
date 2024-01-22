const database = require('./database');
const Patient = require('./patient');

class PatientDAO {
  static insertPatient(patient) {
    database.patients.push(patient);
    
  }

  static retrievePatient(id) {
    const patient = database.patients.find((patient) => patient.id === id);

    if (patient) {
      return new Patient({
        id: patient.id,
        lastName: patient.lastName,
        firstName: patient.firstName,
        creationDate: patient.creationDate,
      });
    }

    return null;
  }
}

module.exports = PatientDAO;
