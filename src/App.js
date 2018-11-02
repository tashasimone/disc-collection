import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Disc extends Component {
  render() {
    const title = "Samantha";
    return (
      <div className="Disc">
        <img src={logo} className="Disc-cover" alt="disc cover" />
        <h2 className="Disc-title">{title}</h2>
        <ul className="Disc-info">
          <li className="Disc-type">Type: {this.props.type}</li>
          <li className="Disc-year">Year: {this.props.year}</li>
          <li className="Disc-genre">Genre: {this.props.genre}</li>
        </ul>
      </div>
    );
  }
}

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discs: Array(5).fill(null)
    };
  }

  renderDisc(i) {
    return <Disc value={i} />;
  }

  render() {
    <div>
      {this.renderDisc(0)}
    </div>
  }
}

export default App;
