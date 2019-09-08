import React from 'react';
import unsplash from '../api/unsplash.js'; 
import SearchBar from './SearchBar';
import ImageList from './imageList';
import Footer from './footer';

import './app.css';

class App extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		term:'',
  		collection: [],
      error: ""
  	}
  }
  
  onSearchSubmit = async (term) => {
  	const response = await unsplash.get('https://api.unsplash.com/search/photos', {
  		params: {query: term},
  	});
    
    if( response.data.results.length > 0 ){
  	 this.setState({ collection: response.data.results });
    } else {
    this.setState({ error: "Sorry, nothing came back! Be more descriptive!" });
    }
  }
  
  //Just another way to do it with a function here in APP.js instead of with ImageList
  displayImages(collection = this.state.collection){
  	const allImages = collection.map( ({description, id, urls}) => {
  		return <li key={id}><img src={urls.regular} alt={description} /></li> 
  	})
  	console.log(allImages);
  	return allImages;
  }

  // This way is done with a component ImageList to render the items
	render() {
	  return (
	    <div className="ui container tinyForm">
	      <SearchBar onSubmit={this.onSearchSubmit}/>
	      <ImageList images={this.state.collection} error={this.state.error}/>
        <Footer />
	    </div>
	  );
	}
}

export default App;

// CALLING A FUNCTION instead of importing a COMPONENT:
	// render() {
	//   return (
	//     <div className="ui container tinyForm">
	//       <SearchBar onSubmit={this.onSearchSubmit}/>
	//       <ul>
	//       	{this.displayImages(this.state.collection)}
	//       </ul>
	//     </div>
	//   );
	// }
