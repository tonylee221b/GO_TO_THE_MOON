import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <article className="article_title">
        <h2>{this.props.data.title}</h2>
        {this.props.data.desc}
      </article>
    );
  }
}

export default Content;