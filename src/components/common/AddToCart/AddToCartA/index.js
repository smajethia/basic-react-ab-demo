import React, { Component } from 'react';
import s from '../styles';

class AddToCartA extends Component {
  
  render() {
    return (
      	<s.outerDiv>        		
        	<div >Cart A</div>     
        	<s.AddToCartButtonGreen>Add</s.AddToCartButtonGreen>
        	<s.Details bucket={this.props.bucket}>Details</s.Details>
    	</s.outerDiv>
     )
  }
}

export default AddToCartA;
