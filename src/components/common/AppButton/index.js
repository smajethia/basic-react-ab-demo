import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {Experiment, Variant} from 'react-ab-experiment'

import SearchButton from './SearchButton';
import SubmitButton from './SubmitButton';

const LocalStorageCache  = {
  get:  (key) => {
    return window.localStorage.getItem(key)
  },
  set: (key, value) => {
    return window.localStorage.setItem(key, value)
  }
}

class AppButton extends Component {  
 
  handleEnrolment (experimentId, variantName) {
    // send enrollment data to AB test reporting tool, eg: Google Analytics     
  }

  components = {
      SearchButton: SearchButton,
      SubmitButton: SubmitButton
  };    

  render() {
    const RenderComp = this.components[this.props.renderComp || 'SearchButton'];
    return(
        <div>
          <input type="text" />
          <h1>Approach 1:- Render button using AB Experiment</h1>
          <Experiment id="testExperiment" onEnrolment={this.handleEnrolment} cache={LocalStorageCache}>
           <Variant name="A">
             <div><SearchButton /></div> 
           </Variant>
           <Variant name="B">
            <div><SubmitButton /></div>              
           </Variant>          
          </Experiment> 

          <h1>Approach 2:- Render button using Dynamic Rendering</h1>
          <RenderComp /> 

          <h1>Render button using Switch case</h1>
        </div>
      )
  }
}

export default AppButton;
