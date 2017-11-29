import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AppButton from '../../components/common/AppButton';

class Inbox extends Component {  

  render() {
    return (
      <div>    
        <p>Inbox</p>        
      </div>
     )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Inbox);
