
const Patient = require('./patient');
const database = require('./database');

function insertPatient(patient) {
    const { lastName, firstName } = patient;

    const newPatient = new Patient( lastName, firstName, new Date());

    database.patients.push(newPatient);

    console.log(database.patient);

}

function retrievePatientList() {
    const patientsWithoutDates = database.patients.map(patient => ({
        id: patient.id,
        lastName: patient.lastName,
        firstName: patient.firstName
    }));

    return patientsWithoutDates;
}


module.exports = {
    insertPatient: insertPatient,
    retrievePatientList: retrievePatientList
};