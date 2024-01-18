const PatientService = require ( "./patientService");

const patientService = new PatientService();

patientService.addPatient("Dupont", "Jean");

const patient = patientService.getPatient(1);

console.log(patient);

