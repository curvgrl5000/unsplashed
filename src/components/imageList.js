import React from 'react';
import './imageLayout.css';

const ImageList = (props) => {
	//console.log(props.images);
  const allImages = props.images.map( ({description, id, urls}) => {
  		return <img key={id} src={urls.regular} alt={description} />
  	});
	return <div className="imageLayout">{allImages}</div>
};

export default ImageList;