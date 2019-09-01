import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
import './app.css'; 

class App extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		term:'',
  	}
  }

  // Access Key: 
  // 8dd20cb2d30579d1d53552368b25abae7d7dc7a7141ebdb2a35940833c3e5572
  
  // Secret Key:
  // f2e42aaa1157e4e36e4a48122dd38216cb4f2c05e9e31289d31005995988d84e
  
  onSearchSubmit(term){
  	console.log(term);
  	axios.get('https://api.unsplash.com/search/photos', {
  		params:  { query: term },
      headers: {
      	Authorization: 'Client-ID 8dd20cb2d30579d1d53552368b25abae7d7dc7a7141ebdb2a35940833c3e5572'
      } 
  	});
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
