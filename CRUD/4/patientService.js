const   Patient = require  ("./patient");
const PatientDAO  = require ( "./patientDAO");

export default class PatientService {
  static addPatient(lastName, firstName) {
    const patient = new Patient({
      lastName,
      firstName,
      creationDate: new Date(),
    });

    PatientDAO.insertPatient(patient);
  }

  static getPatient(id) {
    return PatientDAO.retrievePatient(id);
  }
} 
module.exports = {
    addPatient,
    getPatient,
    getPatientList,
};