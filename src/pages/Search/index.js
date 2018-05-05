import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppButton from '../../components/common/AppButton';
import AddToCart from '../../components/common/AddToCart';

class Search extends Component {  
  render() {
    return (
      <div>    
        <AppButton bucket="A" />
        <br />
        <AppButton bucket="B" />


        <AddToCart bucket="A" />
        <br />
        <AddToCart bucket="B" />
      </div>
     )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Search);
