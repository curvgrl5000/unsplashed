import React from 'react';

class singleImage extends React.Component{
  constructor(){
  	super();
  	this.state = {

  	}
  }
 	
	render(){
		const {description, urls, id } = this.props.image; 

		return(
			<div className="imageLayout">
				<img alt={description} 
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
