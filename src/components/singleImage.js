import React from 'react';

class singleImage extends React.Component{
  constructor(props){
  	super();
  	this.state = {
  		 spans : 0 
  	}
  	this.imageRef = React.createRef();
  }

  componentDidMount(){
  	console.log(this.imageRef.current.addEventListener('load', this.setSpans));
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1 ); 
    this.setState({ spans });
  }
 	
	render(){
		const { description, urls } = this.props.image; 

		return(
			<div className="imageParent"style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img 
				  ref={this.imageRef}
				  alt={description} 
				  src={urls.regular}/>
			</div>
	  )
	}

}

export default singleImage;
