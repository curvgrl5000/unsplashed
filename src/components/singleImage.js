import React from 'react';

class singleImage extends React.Component{
  constructor(props){
  	super();
  	this.state = {} // see below on the rationale for not using state...
  	this.imageRef = React.createRef();
  }

  componentDidMount(){
  	console.log(this.imageRef.current.addEventListener('load', this.setSpans));
  }

  setSpans= () => {
    console.log(this.imageRef.current.clientHeight);
  }
 	
	render(){
		const {description, urls, id } = this.props.image; 

		return(
			<div className="imageLayout">
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