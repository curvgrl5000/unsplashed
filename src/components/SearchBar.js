import React from 'react';
import './searchBar.css'; 

class SearchBar extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		search:'',
  		message: ''
  	}
  }
  
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.setState({ message: `We are looking for: ${this.state.search}`});
    this.setState({ search: " " });
  }

  onInputClick = (e) => {
  	e.preventDefault();
  	console.log("Something was clicked");
    this.setState({ search:'jamming, musical performances, solos' });
  	this.setState({ message: ""});
  }

  render() {
	  return (
	    <div className="ui segment">
	    	<form className="ui form" onSubmit={this.onHandleSubmit}>
	    		<div className="field">
	    		  <label className="">Image Search</label>
	          <input
	            type="text" 
	            value={this.state.search}
	            placeholder='jamming, musical performances, solos' 
	            onChange={e => this.setState({ search: e.target.value.toUpperCase() }) } />
	            <input type="submit" value="Submit" />
	            <input type="button" name="cancel" value="Cancel" onClick={this.onInputClick} />
	        </div>
	      </form>
	      <div className="message">{this.state.message}</div>  
	    </div>
	  );
	}
}

export default SearchBar;

// Same exact results, they do the same thing:
// Here we're defining a separate function ont he class:
// <input type="text" onChange={this.onInputChange} /> 

// Here we're using an error function, grabbing the event and doing the same thing the separate function was doing:
// <input type="text" onChange={(e) => console.log(e.target.value)} />

//https://stackoverflow.com/questions/43922508/clear-and-reset-form-input-fields/43922523

// stephengrider.gitub.io/playgrounds/
// CHECK OUT the THIS excercise.... 'this.js' and run it on RALLYCODING....