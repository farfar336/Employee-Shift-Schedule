import React, { Component } from 'react';
import axios from 'axios';

export default class ShiftsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      shifts: [
        { date: "October 1", clockIn: '4 am', clockOut: '10 am', missed: 'Yes' },
        { date: "October 2", clockIn: '4 am', clockOut: '10 am', missed: 'No' }
      ]   
    }
  }
  
  // Retrieve info to be displayed later
  componentDidMount() {
    axios.get('http://localhost:5000/employees/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  shiftsList(){
    return this.state.shifts.map((shift) => (
      <p>{shift.id} {shift.clockIn} {shift.clockOut} {shift.missed}</p>
     ) 
    )
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
              { this.shiftsList() }
            </tbody>
        </table>
      </div>
    )
  }
}