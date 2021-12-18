import React, {Component} from 'react';
import axios from 'axios';

// Used to hold employee variables
const Employee = props => (
  <tr>
    <td>{props.employee.employeeID}</td>
    <td>{props.employee.firstName}</td>
    <td>{props.employee.lastName}</td>
    <td>{props.employee.position}</td>
  </tr>
)

export default class EmployeesList extends Component {
    constructor(props) {
        super(props);
        this.state = {employees: []};
      }

      // Called after component is inserted. Used to initalize info
      componentDidMount() {
        axios.get('http://localhost:5000/employees/') //Where to retrieve info from
          .then(response => {
            this.setState({ employees: response.data }) //Get all the fields
          })
          .catch((error) => {
            console.log(error);
          })
      }

      // Returns a list of all employees
      employeeList() {
        return this.state.employees.map(currentemployee => {
          return <Employee employee={currentemployee} key={currentemployee._id}/>;
        })
      }

    render() {
      return (
        <div>
          <h3>Employees</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              { this.employeeList() }
            </tbody>
          </table>
        </div>
      )
    }
}