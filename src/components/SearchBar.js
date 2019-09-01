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

  // Access Key: 
  // 8dd20cb2d30579d1d53552368b25abae7d7dc7a7141ebdb2a35940833c3e5572
  
  // Secret Key:
  // f2e42aaa1157e4e36e4a48122dd38216cb4f2c05e9e31289d31005995988d84e

  // these arrow functions BIND the ideas of 'this' inside of the functions
  // which means we don't have the wacky, undefined error you get with 'this'
  // SEE the this.js file 
  // Also notice that I'm doing the same thing with the arrow function onChange below!!

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.setState({ message: `We are looking for: ${this.state.search}`});
    this.setState({ search: " " });
    this.props.onSubmit(this.state.search);
  }

  // Now we can do it this way or we can invoke the onClick with an arrow function below
  // with the 2nd version of onInputClickTwo.... 
  onInputClick = (e) => {
  	e.preventDefault();
  	console.log("Something was clicked");
    this.setState({ search:'jamming, musical performances, solos' });
  	this.setState({ message: ""});
  }

   onInputClickTwo(e){
   	e.preventDefault();
  	console.log("Something was clicked");
    this.setState({ search:'' });
  	this.setState({ message: ""});
  }

  render() {
	  return (
	    <div className="ui segment">
	    	<form className="ui form" onSubmit={this.onHandleSubmit}>
	    		<div className="field">
	    		  <label className="">Image Search</label>
	          <input
	            required
	            type="text" 
	            value={this.state.search}
	            placeholder='jamming, musical performances, solos' 
	            onChange={e => this.setState({ search: e.target.value.toUpperCase() }) } />
	            <input type="submit" value="Submit" />
	            <input type="button" id="cancel" name="cancel" value="Cancel" onClick={(e) => this.onInputClickTwo(e)} />
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