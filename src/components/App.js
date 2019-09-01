import React from 'react';
import unsplash from '../api/unsplash.js'; 
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
  	const response = await unsplash.get('https://api.unsplash.com/search/photos', {
  		params: {query: term},
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
