import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div>
        <p className="table_title">
          <strong>Patient Health Care Information</strong>
        </p>
        <table className="tableForm">
          <tb className="tb_style">
            <tr>
              <td className="td1">Name</td>
              <td className="td2">{this.props.data.userName}</td>
            </tr>
            <tr>
              <td className="td1">Age</td>
              <td className="td2">{this.props.data.userAge}</td>
            </tr>
            <tr>
              <td className="td1">Sex</td>
              <td className="td2">{this.props.data.userSex}</td>
            </tr>
            <tr>
              <td className="td1">Date Of Birth</td>
              <td className="td2">{this.props.data.userDateOfBirth}</td>
            </tr>
            <tr>
              <td className="td1">Height</td>
              <td className="td2">{this.props.data.userHeight}</td>
            </tr>
            <tr>
              <td className="td1">Weight</td>
              <td className="td2">{this.props.data.userWeight}</td>
            </tr>
            <tr>
              <td className="td1">Blood Type</td>
              <td className="td2">{this.props.data.userBloodType}</td>
            </tr>
            <tr>
              <td className="td1">Address</td>
              <td className="td2">{this.props.data.userAddress}</td>
            </tr>
            <tr>
              <td className="td1">Phone Number</td>
              <td className="td2">{this.props.data.userPhoneNum}</td>
            </tr>
            <tr>
              <td className="td1">Country</td>
              <td className="td2">{this.props.data.userCountry}</td>
            </tr>
          </tb>
        </table>
      </div>
    );
  }
}
export default Display;