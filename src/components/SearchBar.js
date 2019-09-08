import React from 'react';
import './searchBar.css'; 

class SearchBar extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		search:'',
  		message: '',
      startString: ''
  	}
  }

  // these arrow functions BIND the ideas of 'this' inside of the functions
  // which means we don't have the wacky, undefined error you get with 'this'
  // SEE the this.js file 
  // Also notice that I'm doing the same thing with the arrow function onChange below!!

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.setState({ startString: 'Searching for: '});
    this.setState({ message: `${this.state.search}`});
    this.setState({ search: " " });
    this.props.onSubmit(this.state.search);
  }

  // Now we can do it this way or we can invoke the onClick with an arrow function below
  // with the 2nd version of onInputClickTwo.... 
  onInputClick = (e) => {
  	e.preventDefault();
  	// console.log("Something was clicked");
    this.setState({ search:'jamming, musical performances, solos' });
  	this.setState({ message: ""});
  }

   onInputClickTwo(e){
   	e.preventDefault();
  	// console.log("Something was clicked");
    this.setState({ search:'' });
  	this.setState({ message: ""});
    this.setState({ startString: ''});
  }

  render() {
    
	  return (
	    <div className="ui segment">
	    	<form className="ui form" onSubmit={this.onHandleSubmit}>
	    		<div className="field">
	    		  <label className="title">Image Search</label>
	          <input
	            required
	            type="text" 
	            value={this.state.search}
	            placeholder='jamming, musical performances, solos' 
	            onChange={e => this.setState({ search: e.target.value.toUpperCase() }) } />
            <div className="selections">
              <h1 className="message">{this.state.startString}<span className="start">{this.state.message}</span></h1>
              <div className="buttons">  
	              <input type="submit" value="Submit" />
	              <input type="button" id="cancel" name="cancel" value="Cancel" onClick={(e) => this.onInputClickTwo(e)} />
              </div>
	          </div> 
          </div>
	      </form>
	    </div>
	  );
	}
}

export default SearchBar;
