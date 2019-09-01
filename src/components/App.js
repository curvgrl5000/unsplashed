import React from 'react';
import SearchBar from './SearchBar';
import './app.css'; 

class App extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		term:'',
  	}
  }

  onSearchSubmit(term){
  	console.log(term);
  }

	render() {
	  return (
	    <div className="ui container tinyForm">
	      <SearchBar onSubmit={this.onSearchSubmit}/>
	    </div>
	  );
	}
}

export default App;
