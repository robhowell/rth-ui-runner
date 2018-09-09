import React, { Component } from 'react';
import './App.css';
import Button from './Button/Button';
import ButtonExample from './Button/Button.mdx';

export default class App extends Component {
  state = {
    name: 'rth-ui-runner',
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
        <Button>Test button</Button>
        <ButtonExample/>
      </div>
    );
  }
}
