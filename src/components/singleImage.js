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