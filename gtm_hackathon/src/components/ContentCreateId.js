import React, { Component } from 'react';

class ContentCreateId extends Component {
  state = {
    id: 0,
    email: '',
    password: '',
    password2: ''
  };

  ChangeFormHandlerid(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  CheckPswd() {
    if (this.state.password === '' || this.state.password2 === '') {
      return;
    }
    else if (this.state.password === this.state.password2) {
      return <span>Successfully Logged in!</span>;
    } else {
      return <span>Wrong Password. Please Try Again.</span>;
    }
  }

  render() {
    return (
        <div>
          <div>
            <h3>
              <label for="email">Email</label>
            </h3>

            <span>
              <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.ChangeFormHandlerid.bind(this)}></input>
            </span>
          </div>

          <div>
            <h3>
              <label for="password">Password</label>
            </h3>

            <span>
              <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.ChangeFormHandlerid.bind(this)}></input>
            </span>

            <h3>
              <label for="password2">Password Again</label>
            </h3>

            <span>
              <input name="password2" type="password" placeholder="Password" value={this.state.password2} onChange={this.ChangeFormHandlerid.bind(this)}></input>
            </span>
          </div>

          <div>{this.CheckPswd()}</div>

          <div className="sign_but_div">
            <br />
            <button className="sign_butt"
              onClick={function (ev) {
                ev.preventDefault();
                this.props.onClick(this.state);
              }.bind(this)}
            >
              Sign in
            </button>
          </div>
        </div>
    );
  }
}

export default ContentCreateId;