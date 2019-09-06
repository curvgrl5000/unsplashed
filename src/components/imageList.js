import React from 'react';
import SingleImage from './singleImage';
import './imageLayout.css';

const ImageList = (props) => {
	//console.log(props.images);
  const allImages = props.images.map( (image) => {
  		return <SingleImage key={image.id} image={image} />
  	});
	return <div className="imageLayout">{allImages}</div>
};

export default ImageList;