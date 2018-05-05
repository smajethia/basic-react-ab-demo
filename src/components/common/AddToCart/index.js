import React, { Component } from 'react';
import AddToCartA from './AddToCartA';
import AddToCartB from './AddToCartB';
// import s from './styles';

class AddToCart extends Component {  

  components = {
      A: AddToCartA,
      B: AddToCartB
  };    

  render() {
    const RenderComp = this.components[this.props.bucket || 'A'];
    return(
        <div>          
          <RenderComp bucket={this.props.bucket} /> 
        </div>
      )
  }
}

export default AddToCart;
