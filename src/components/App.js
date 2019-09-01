import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
import './app.css'; 

class App extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		term:'',
  		collection: []
  	}
  }
  
  onSearchSubmit = async (term) => {
  	const response = await axios.get('https://api.unsplash.com/search/photos', {
  		params:  { query: term },
      headers: {
      	Authorization: 'Client-ID 8dd20cb2d30579d1d53552368b25abae7d7dc7a7141ebdb2a35940833c3e5572'
      } 
  	});

  	this.setState({ collection: response.data.results });
  }

  displayImages(collection){
  	console.log(collection)
  	collection.map( (image, index) => {
  		return `<li><img id=${index} src=${image.urls.regular} </li>` 
  	})
  }

	render() {
	  return (
	    <div className="ui container tinyForm">
	      <SearchBar onSubmit={this.onSearchSubmit}/>
	      <ul>
	        {this.displayImages(this.state.collection)}
	      </ul>
	      <h2>FOUND: {this.state.collection.length} images!</h2>

	    </div>
	  );
	}
}

export default App;
