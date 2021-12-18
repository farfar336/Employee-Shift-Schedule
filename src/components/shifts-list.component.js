import React, { Component } from 'react';

export default class ShiftsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.firstName} {this.state.lastName} Shifts</h3>
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
              Body
            </tbody>
        </table>
      </div>
    )
  }
}