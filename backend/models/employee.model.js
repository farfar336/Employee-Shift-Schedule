// Used for connecting to mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeID: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
});

// "Employee" will contain the above variables
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;