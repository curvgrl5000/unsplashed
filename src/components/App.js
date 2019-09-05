import React from 'react';
import unsplash from '../api/unsplash.js'; 
import SearchBar from './SearchBar';
import ImageList from './imageList';
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

  displayImages(collection = this.state.collection){
  	const allImages = collection.map( (image, index) => {
  		return <li><img id={index} src={image.urls.regular}/></li> 
  	})
  	console.log(allImages);
  	return allImages;
  }

	render() {
	  return (
	    <div className="ui container tinyForm">
	      <SearchBar onSubmit={this.onSearchSubmit}/>
	      <ul>
	      	{this.displayImages(this.state.collection)}
	      </ul>
	    </div>
	  );
	}
}

export default App;

  // <ul>
  //   <ImageList images={this.state.collection} />
  // </ul>


// CALLING A FUNCTION instead of importing a COMPONENT:
// render() {
// 	  return (
// 	    <div className="ui container tinyForm">
// 	      <SearchBar onSubmit={this.onSearchSubmit}/>
// 	      <ul>
// 	      	{this.displayImages(this.state.collection)}
// 	      </ul>
// 	    </div>
// 	  );
// 	}