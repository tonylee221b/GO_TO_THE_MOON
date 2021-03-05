import React, { Component } from 'react';

class DisplayRange extends Component {
  checkTrue() {
    let arr = [];
    let _key = Object.keys(this.props.data);
    let value = Object.values(this.props.data);
    for (let i in _key) {
      if (value[i] === 'true') {
        arr.push(
          <span className="range_span">
            <b>{_key[i]}</b>
          </span>
        );
      }
    }

    return arr;
  }

  render() {
    return (
      <div>
        <p>
          <strong>These information will be provided to the appropriate personnel.</strong>
          <br />
          <br />
        </p>

        <div className="wrap">
          <h2>The list of you choice</h2>
          {this.checkTrue()}
        </div>
      </div>
    );
  }
}

export default DisplayRange;