import React, { Component } from 'react';
import GTM_logo from '../GTM_logo.png';

class Index extends Component {
  render() {
    var i = 0;
    var list = [];
    while (i < this.props.data.length) {
      var data = this.props.data[i];
      list.push(
        <li className="index_li_margin" key={data.id}>
          <a
            href={data.id + '.html'}
            onClick={function (id, ev) {
              ev.preventDefault();
              this.props.onSelect(id);
            }.bind(this, data.id)}
          >{data.title}
          </a>
        </li>
      );
      i++;
    }

    return (
      <div id="index_nav" className="grid">
        <ol className="index_margin">{list}</ol>
        <br />
        <img src={GTM_logo} className="App-logo" alt="logo"></img>
      </div>
    );
  }
}

export default Index;