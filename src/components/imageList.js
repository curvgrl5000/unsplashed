import React from 'react';
import SingleImage from './singleImage';
import './imageLayout.css';

const ImageList = (props) => {
	// console.log( props.images.length );
  if( props.images.length > 0 ) {
  	const allImages = props.images.map( (image) => {
  	  return <SingleImage key={image.id} image={image} />
  	});
	  return <div className="imageLayout">{allImages}</div>
  } if( props.images.length === 0) {
  		// console.log( `${props.error}` );
  		return <h2 className="noResults">{props.error}</h2>
  }
  return null;
};

export default ImageList;