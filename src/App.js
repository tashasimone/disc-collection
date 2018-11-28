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
      <div className="Collection functions">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h1 className="navbar-nav mr-auto">Tasha's Disc Collection</h1>
      <form className="sort-by form-inline my-2 my-lg-0">
        <label><h2>Sort by: </h2></label>
        <select value={this.state.sortBy} onChange={this.sort}>
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="genre">Genre</option>
          <option value="rating">Rating</option>
          <option value="type">Disc Type</option>
        </select>
      </form>
      </nav>
      <div className="cards">
      <form>
        <div className="add-disc card text-white bg-secondary">
          <div className="card-header accordion"><h2>Add Disc</h2></div>
          <div className="card-body panel bg-secondary">
            <label className="disc-label">Title: <input type="text" name="title" onChange={e => this.setState({ title: e.target.value})}></input></label><br/>
            <label className="disc-label">Disc Type: 
              <select value="DVD" name="type" onChange={e => this.setState({ type: e.target.value})}>
                <option value="DVD">DVD</option>
                <option value="Blu-Ray">Blu-Ray</option>
                <option value="CD">CD</option>
              </select>
            </label><br/>
            <label className="disc-label">Year: <input type="text" name="year" onChange={e => this.setState({ year: e.target.value})}></input></label><br/>
            <label className="disc-label">Genre: <input type="text" name="genre" onChange={e => this.setState({ genre: e.target.value})}></input></label><br/>
            <label className="disc-label">Rating: <input type="text" name="rating" onChange={e => this.setState({ rating: e.target.value})}></input></label><br/>
            <input type="button" className="btn btn-primary" value="Add Disc" onClick={this.addDisc}/>
          </div>
        </div>
      </form>
        {this.state.discs.map((disc) =>
            this.renderDisc(disc)
        )}
        </div>
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
//accordion effect for add disc
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
export default Collection;