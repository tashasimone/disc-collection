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
          <li className="Disc-rating">Rating: {this.props.rating}</li>
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
    this.sort = this.sort.bind(this);
    this.addDisc = this.addDisc.bind(this);
  }

  renderDisc(disc) {
    return <Disc key={disc.title} title={disc.title} type={disc.type} year={disc.year} genre={disc.genre} rating={disc.rating}/>;
  }

  render() {
    return (
      <div className="Collection">
      <form>
        <select value={this.state.sortBy} onChange={this.sort}>
          <option value="title">title</option>
          <option value="year">year</option>
          <option value="genre">genre</option>
          <option value="rating">rating</option>
          <option value="type">disc type</option>
        </select>

        <p>ADD DISC</p>
        <label>Title: <input type="text" name="title" onChange={e => this.setState({ title: e.target.value})}></input></label>
        <label>Disc Type: 
          <select value="DVD" name="type" onChange={e => this.setState({ type: e.target.value})}>
            <option value="DVD">DVD</option>
            <option value="Blu-Ray">Blu-Ray</option>
            <option value="CD">CD</option>
          </select>
        </label>
        <label>Year: <input type="text" name="year" onChange={e => this.setState({ year: e.target.value})}></input></label>
        <label>Genre: <input type="text" name="genre" onChange={e => this.setState({ genre: e.target.value})}></input></label>
        <label>Rating: <input type="text" name="rating" onChange={e => this.setState({ rating: e.target.value})}></input></label>
        <input type="button" value="Add Disc" onClick={this.addDisc}/>
      </form>
        {this.state.discs.map((disc) =>
            this.renderDisc(disc)
        )}
      </div>
    );
  }

  addDisc(event){
    this.state.discs.push({
      title: this.state.title,
      type: this.state.type,
      year: this.state.year,
      genre: this.state.genre,
      rating: this.state.rating
    });
    this.sort({
      target: {
        value: this.state.sortBy
      }
    });
  }
  sort(event) {
    let sortBy = event.target.value;
    this.state.discs.sort((a, b) => {
      let comparison = 0;
      if (a[sortBy] > b[sortBy]) {
        comparison = 1;
      } else if (a[sortBy] < b[sortBy]) {
        comparison = -1;
      }
      return comparison;
    });
    this.setState({state: this.state, sortBy: sortBy});
  }
}

ReactDOM.render(<Collection/>, document.getElementById("root"));
export default Collection;