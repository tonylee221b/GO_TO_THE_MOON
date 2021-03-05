import React, { Component } from 'react';


class ContentCreate extends Component {
  state = {
    id: 0,
    userName: '',
    userAge: '',
    userSex: '',
    userDateOfBirth: '',
    userHeight: '',
    userWeight: '',
    userBloodType: '',
    userAddress: '',
    userPhoneNum: '',
    userCountry: '',
  };

  changeFormHandler(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  render() {
    return (
      <article>
        <form
          onSubmit={function (ev) {
            ev.preventDefault();
            this.props.onSubmit(this.state);
          }.bind(this)}
        >
          <p>
            <span>Name: </span>
            <input type="text" placeholder="First and Last Name" name="userName" value={this.state.userName} onChange={this.changeFormHandler.bind(this)}></input>
          </p>

          <p>
            <span>Age: </span>
            <input type="text" placeholder="Age" name="userAge" value={this.state.userAge} onChange={this.changeFormHandler.bind(this)}></input>
          </p>

          <p>
            <span>Sex: </span>
            <input type="text" placeholder="Sex" name="userSex" value={this.state.userSex} onChange={this.changeFormHandler.bind(this)}></input>
          </p>

          <p>
            <span>Date Of Birth: </span>
            <input type="text" placeholder="MM/DD/YYYY" name="userDateOfBirth" value={this.state.userDateOfBirth} onChange={this.changeFormHandler.bind(this)}></input>
          </p>

          <p>
            <span>Height: </span>
            <input type="text" placeholder="Height" name="userHeight" value={this.state.userHeight} onChange={this.changeFormHandler.bind(this)}></input>
          </p>

          <p>
            <span>Weight: </span>
            <input type="text" placeholder="Weight" name="userWeight" value={this.state.userWeight} onChange={this.changeFormHandler.bind(this)}></input>
          </p>

          <p>
            <span>Blood Type: </span>
            <input type="text" placeholder="Blood Type" name="userBloodType" value={this.state.userBloodType} onChange={this.changeFormHandler.bind(this)}></input>
          </p>

          <p>
            <span>Address: </span>
            <input type="text" placeholder="Address" name="userAddress" value={this.state.userAddress} onChange={this.changeFormHandler.bind(this)}></input>
          </p>

          <p>
            <span>Phone Number: </span>
            <input type="text" placeholder="No Dash" name="userPhoneNum" value={this.state.userPhoneNum} onChange={this.changeFormHandler.bind(this)}></input>
          </p>

          <p>
            <span>Country: </span>
            <input type="text" placeholder="Country" name="userCountry" value={this.state.userCountry} onChange={this.changeFormHandler.bind(this)}></input>
          </p>

          <p>
            <br />
            <input className="mine_button" type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default ContentCreate;