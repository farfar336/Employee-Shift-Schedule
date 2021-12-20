// Used for connecting to mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeID: {type: String, unique: true},
  firstName: {type: String},
  lastName: {type: String },
  position: {type: String},
  shifts: [{
    date: {type: Date},
    clockIn: {type: Date},
    clockOut: {type: Date},
    missed: {type: String}
  }]
});

// "Employee" will contain the above variables in the mongoDB
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;