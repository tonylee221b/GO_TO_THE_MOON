import React, { Component } from 'react';

class ShowLogHistory extends Component {
  getHistory() {
    let arr = this.props.data.map(elem =>
        <div>
          <span>{elem.time}: </span>
          <strong>{elem.hash}</strong>
        </div>
      )

      return arr;
  }

  render () {
    return (
      <div>
        <div className="log_head">
          <h1>The History Of Your Hash Log</h1>
        </div>

        <div>{this.getHistory()}</div>
      </div>
    );
  }
}

export default ShowLogHistory;