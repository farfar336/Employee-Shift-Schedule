// Server initilization 
const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Middleware
app.use(express.json()); // Allows parsing json

const uri = process.env.ATLAS_URI; 
mongoose.connect(uri, { useNewUrlParser: true, });
const connection = mongoose.connection;
connection.once('open', () => { //Executes when MongoDB is connected succesfully
    console.log("MongoDB database connection established succesfully");
})

// Importing the files into these variables:
const employeesRouter = require('./routes/employees');

// When /employees is put at the end, it will load that corresponding router
app.use('/employees', employeesRouter);

app.listen(port, () => { //Runs on the specifed port
    console.log(`Server is running on port: ${port}`);
});