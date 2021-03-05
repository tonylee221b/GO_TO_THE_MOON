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
        {this.getHistory()}
      </div>
    );
  }

}

export default ShowLogHistory;