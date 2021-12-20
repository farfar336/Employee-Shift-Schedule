import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'

const Shift = props => (
  <tr>
    <td>{moment(props.shift.date).utcOffset('-00:00').format('YYYY-MM-DD')}</td> 
    <td>{moment(props.shift.clockIn).utcOffset('-00:00').format('hh:mm:ss a')}</td>
    <td>{moment(props.shift.clockOut).utcOffset('-00:00').format('hh:mm:ss a')}</td>
    <td>{props.shift.missed}</td>
  </tr>
)

export default class ShiftsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      shifts: [] 
    }
  }
  
  // Retrieve info to be displayed later
  componentDidMount() {
    axios.get('http://localhost:5000/employees/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          shifts: response.data.shifts
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

    // Returns a list of all shifts
    shiftsList() {
      return this.state.shifts.map(currentshift => {
        return <Shift shift={currentshift} key={currentshift._id}/>;
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
              { this.shiftsList() }
            </tbody>
        </table>
      </div>
    )
  }
}