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
  
  async onSearchSubmit(term){
  	const response = await axios.get('https://api.unsplash.com/search/photos', {
  		params:  { query: term },
      headers: {
      	Authorization: 'Client-ID 8dd20cb2d30579d1d53552368b25abae7d7dc7a7141ebdb2a35940833c3e5572'
      } 
  	});

  	console.log(response.data.results);
  }

  displayImages = (collection) => {
  	collection.map((image, index) => {
  		return `<ul>
  		         <li>
  		           <img id=${index} src=${image.urls.regular} />
  		         </li>
  		        </ul>` 
  	})
  }

	render() {
	  return (
	    <div className="ui container tinyForm">
	      <SearchBar onSubmit={this.onSearchSubmit}/>
	      {this.displayImages(this.state.collection)}
	    </div>
	  );
	}
}

export default App;
