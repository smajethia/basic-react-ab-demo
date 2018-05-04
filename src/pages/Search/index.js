import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppButton from '../../components/common/AppButton';

class Search extends Component {  
  render() {
    return (
      <div>    
        <AppButton bucket="A" />
      </div>
     )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Search);
