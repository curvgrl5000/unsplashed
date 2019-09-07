import React from 'react';

class singleImage extends React.Component{
  constructor(props){
  	super();
  	this.state = {
  		 spans : 0 
  	}

  	// see below on the rationale for not using state initially
  	this.imageRef = React.createRef();
  
  }

  componentDidMount(){
  	console.log(this.imageRef.current.addEventListener('load', this.setSpans));
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1 ); //+ 1; // adding one rounds it up
    this.setState({ spans });
  }
 	
	render(){
		const { description, urls } = this.props.image; 

		return(
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img 
				  ref={this.imageRef}
				  alt={description} 
				  src={urls.regular}/>
			</div>
	  )
	}

}

export default singleImage;

// To get the height of the image in vanilla javascript:
// var k = document.querySelector('img').clientHeight;

// Instead of doing it the ol' vanilla javascript way
// we do it the ref way; 
// React Refs give access to a single DOM element and 
// allows you to create refs in the constructor, which manages the state
// and then pass it to a JSX element as a props object
// which is where we would get the height to calculate the size 
// of the grid we're building.

// Apparently we're not using state because refs are really the way to go...
// more reading about them here: https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81

//refs are used to get reference to a DOM(Document Object Model) node 
//or an instance of a component in a React Application i.e. refs would return the node we are referencing