import React from 'react';

const ImageList = (props) => {
	//console.log(props.images);
  const allImages = props.images.map( (image, index) => {
  		return <li><img id={index} src={image.urls.regular} /></li> 
  	})
	return <>{allImages}</>
};

export default ImageList;