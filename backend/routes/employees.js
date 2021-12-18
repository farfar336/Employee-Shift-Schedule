// Used for connecting to express
const router = require('express').Router();

// Specifying where to import "Employee" from
let Employee = require('../models/employee.model');

//Handles get request
router.route('/').get((req, res) => {
  // Finds all employees
  Employee.find()
    .then(Employees => res.json(Employees)) //Returns all employees in json format
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;