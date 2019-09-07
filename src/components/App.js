import React, { Component, useState } from 'react';
import '../styles/App.css';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello, World!',
    };
  }

  render() {
    const { title } = this.state;
    const [buttonText] = useState();
    return (
      <div className="app">
        <h1>{title}</h1>
        <p>{buttonText}</p>
        <Button />
      </div>
    );
  }
}

export default App;
