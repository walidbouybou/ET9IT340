
const Patient = require('./patient');
const patientDAO = require('./patientDAO');
const database = require('./database');


function addPatient(lastName, firstName) {

    const newPatient = new Patient(null, lastName, firstName, null);

    patientDAO.insertPatient(newPatient);
}

function getPatientList() {

    const patientList = patientDAO.retrievePatientList();
    return patientList;
}

module.exports = {
    addPatient: addPatient,
    getPatientList: getPatientList
};