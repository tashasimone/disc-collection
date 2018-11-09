import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import *as DiscData from './data';

class Disc extends Component {
  render() {
    return (
      <div className="Disc card text-white bg-primary mb-3">
        <div className="card-header"><h2 className="Disc-title card-title">{this.props.title}</h2></div>
        <div className="card-body">
          <ul className="Disc-info card-text">
            <li className="Disc-type">Type: {this.props.type}</li>
            <li className="Disc-year">Year: {this.props.year}</li>
            <li className="Disc-genre">Genre: {this.props.genre}</li>
            <li className="Disc-rating">Rating: {this.props.rating}</li>
          </ul>
        </div>
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
      <div className="Collection navbar functions">
      <h1>Tasha's Disc Collection</h1>
      <form>
        <label><h4>Sort by:</h4></label>
        <select value={this.state.sortBy} onChange={this.sort}>
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="genre">Genre</option>
          <option value="rating">Rating</option>
          <option value="type">Disc Type</option>
        </select>

        <div className="add-disc card text-white bg-secondary mb-3">
          <div className="card-header"><h4>Add Disc</h4></div>
          <div className="card-body">
            <label>Title: <input type="text" name="title" onChange={e => this.setState({ title: e.target.value})}></input></label><br/>
            <label>Disc Type: 
              <select value="DVD" name="type" onChange={e => this.setState({ type: e.target.value})}>
                <option value="DVD">DVD</option>
                <option value="Blu-Ray">Blu-Ray</option>
                <option value="CD">CD</option>
              </select>
            </label><br/>
            <label>Year: <input type="text" name="year" onChange={e => this.setState({ year: e.target.value})}></input></label><br/>
            <label>Genre: <input type="text" name="genre" onChange={e => this.setState({ genre: e.target.value})}></input></label><br/>
            <label>Rating: <input type="text" name="rating" onChange={e => this.setState({ rating: e.target.value})}></input></label><br/>
            <input type="button" className="btn btn-primary" value="Add Disc" onClick={this.addDisc}/>
          </div>
        </div>
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