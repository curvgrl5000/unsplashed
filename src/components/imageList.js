import React from 'react';

const ImageList = (props) => {
	//console.log(props.images);
  const allImages = props.images.map( (image, index) => {
  		return <li><img key={index} id={index} src={image.urls.regular} alt="UNSPLASH ROCKS" /></li> 
  	})
	return <>{allImages}</>
};

export default ImageList;