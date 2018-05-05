import React, { Component } from 'react';
import s from '../styles';

class AddToCartB extends Component {
  
  render() {
  	console.log(this.props);
    return (
      	<s.outerDiv>        		
        	<div >Cart B</div>     
        	<s.AddToCartButtonOrange>Add</s.AddToCartButtonOrange>
        	<s.Details bucket={this.props.bucket}>Details</s.Details>
    	</s.outerDiv>
     )
  }
}

export default AddToCartB;
