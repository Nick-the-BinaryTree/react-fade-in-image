// @flow
import React, { Component } from 'react';
import Image from './image';
import './App.css';

type Props = any;

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image src="./logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;