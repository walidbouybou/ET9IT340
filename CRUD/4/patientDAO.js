const  database= require  ("./database");

export default class PatientDAO {
  static insertPatient(patient) {
    database.patient.push(patient);
    console.log(database.patient);
  }

  static retrievePatient(id) {
    const patient = database.patient.find((patient) => patient.id === id);

    if (patient) {
      patient.name = patient.lastName + " " + patient.firstName;
    }

    return patient;
  }
} 
module.exports = {
    retrievePatient,

};