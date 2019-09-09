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
      this.setState({ collection: [] });
      this.setState({ error: "Sorry, nothing came back! Be more descriptive!" });
    }
  }

  onCancel = () => {
    this.setState({ collection: [] });
    this.setState({ error: ""});
  }
  
	render() {
	  return (
	    <div className="ui container tinyForm">
	      <SearchBar onSubmit={this.onSearchSubmit} onCancel={this.onCancel}/>
	      <ImageList images={this.state.collection} error={this.state.error}/>
        <Footer />
	    </div>
	  );
	}
}

export default App;
