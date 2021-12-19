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

// Gets info for a specific ID
router.route('/:id').get((req, res) => {
  Employee.findById(req.params.id) //Finds the specific ID
    .then(employee => res.json(employee)) //Return entry as json 
    .catch(err => res.status(400).json('Error: ' + err)); //Else return error
});

module.exports = router;