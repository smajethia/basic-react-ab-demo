import React, { Component } from 'react';
import SearchButton from './SearchButton';
import SubmitButton from './SubmitButton';

class AppButton extends Component {  

  components = {
      A: SearchButton,
      B: SubmitButton
  };    

  render() {
    const RenderComp = this.components[this.props.bucket || 'A'];
    return(
        <div>
          <RenderComp /> 
        </div>
      )
  }
}

export default AppButton;
