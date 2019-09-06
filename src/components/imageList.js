import React from 'react';

const ImageList = (props) => {
	//console.log(props.images);
  const allImages = props.images.map( ({description, id, urls}) => {
  		return <li key={id}><img src={urls.regular} alt={description} /></li> 
  	});
	return <>{allImages}</>
};

export default ImageList;