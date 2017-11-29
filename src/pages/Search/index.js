import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppButton from '../../components/common/AppButton';

class Search extends Component {  

  render() {
    return (
      <div>    
        <p>Search Your Data</p>
        *Data can be made available using API and passed via props
        <AppButton bucket="A" renderComp="SearchButton" />
      </div>
     )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Search);
