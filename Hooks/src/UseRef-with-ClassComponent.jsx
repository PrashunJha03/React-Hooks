import React, { Component, createRef } from 'react';

class UseRefwithClassComponent extends Component {
  constructor(props) {
    super(props);

    this.focusPoint = createRef();
  }

  onClickHandler = () => {
    this.focusPoint.current.value =
      "Learning React With Krishna Sir ";
      
    this.focusPoint.current.focus();
  };

  render() {
    return (
      <div>
        <h1>UseRef With Class Component Example</h1>
        <button onClick={this.onClickHandler}>
          ACTION
        </button>

        <label>
          Click on the action button to
          focus and populate the text.
        </label>

        <br />

        <textarea ref={this.focusPoint} />
      </div>
    );
  }
}

export default UseRefwithClassComponent;



