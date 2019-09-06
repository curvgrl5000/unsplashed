import React from 'react';

const ImageList = (props) => {
	//console.log(props.images);
  const allImages = props.images.map( (image) => {
  		return <li key={image.id}><img src={image.urls.regular} alt="UNSPLASH ROCKS" /></li> 
  	})
	return <>{allImages}</>
};

export default ImageList;