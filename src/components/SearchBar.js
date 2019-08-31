import React from 'react';
import './searchBar.css'; 

let searchQuery = '';

class SearchBar extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		search:'',
  		message: ''
  	}
  }
  
  onInputChange(event){
    event.preventDefault();
    console.log( event.target.value );
    searchQuery = event.target.value;
	}
  onInputSubmit(event, searchQuery){
  	event.preventDefault();
  	console.log(searchQuery);
    this.setState({search: searchQuery})
  }
  onInputClick(event){
  	event.preventDefault();
  	console.log("Something was clicked")
  }

  render() {
	  return (
	    <div className="ui segment">
	    	<form className="ui form">
	    		<div className="field">
	    		  <label className="">Image Search</label>
	          <input type="text" onChange={this.onInputChange} />
	          <button onSubmit={this.onInputSubmit}>submit</button>
	        </div>
	      </form>
	      <div>{this.state.search}</div>  
	      <div>{this.state.message}</div>  
	    </div>
	  );
	}
}

export default SearchBar;
