import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import *as DiscData from './data';

class Disc extends Component {
  render() {
    return (
      <div className="Disc">
        <h2 className="Disc-title">{this.props.title}</h2>
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
      discs: DiscData.collection
    };
    console.log(DiscData.collection);
    this.sort();
  }

  renderDisc(disc) {
    return <Disc key={disc.title} title={disc.title} type={disc.type} year={disc.year} genre={disc.genre} />;
  }

  render() {
    return (
      <div className="Collection">
        {this.state.discs.map((disc) =>
            this.renderDisc(disc)
        )}
      </div>
    );
  }

  sort(sortBy = "title") {
    console.log(this.state.discs);
    this.state.discs.sort((a, b) => {
      let comparison = 0;
      if (a[sortBy] > b[sortBy]) {
        comparison = 1;
      } else if (a[sortBy] < b[sortBy]) {
        comparison = -1;
      }
      return comparison;
    });
    console.log(this.state.discs);
  }
}

ReactDOM.render(<Collection/>, document.getElementById("root"));
export default Collection;