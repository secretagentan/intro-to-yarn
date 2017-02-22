import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    console.log('**clicked**');
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
};
