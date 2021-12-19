// Used for connecting to mongoose
const mongoose = require('mongoose');
const Shift = require('./shift.model');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeID: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  // shifts: [{ type: Schema.type.ObjectID, required: true,  ref: "Shift" }], //Array of shifts
});

// "Employee" will contain the above variables in the mongoDB
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;