// Used for connecting to mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shiftSchema = new Schema({
  date: { type: Date, required: true },
  clockIn: { type: Date, required: true },
  clockOut: { type: Date, required: true },
  missed: { type: boolean, required: true },
});

// "Shift" will contain the above variables in the mongoDB
const Shift = mongoose.model('Shift', shiftSchema);

module.exports = Shift;