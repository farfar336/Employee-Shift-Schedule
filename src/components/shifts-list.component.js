import React, { Component } from 'react';
import axios from 'axios';

export default class ShiftsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/employees/'+this.props.match.params.id)
      .then(response => {
        //   Change fields to new values
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  render() {
    return (
      <div>
        <h3>{this.state.firstName} {this.state.lastName}'s Shifts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Date</th>
              <th>Clock in time</th>
              <th>Clock out time</th>
              <th>Missed shift</th>
            </tr>
          </thead>
          <tbody>
              {/* { this.employeeList() } */}
              {/* Body */}
            </tbody>
        </table>
      </div>
    )
  }
}