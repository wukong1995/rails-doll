import React from 'react';
import PropTypes from 'prop-types';
// import Select from 'react-select';

// import 'react-select/dist/react-select.css';

class Form extends React.Component {
  state = {
    text: true
  }

  switch() {
    console.log("sdhjsdjj")
    this.setState({
      text: !this.state.text
    })
  }

  render() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

    return (
      <div>
        <p>状态：{this.state.text ? 'jdfjjj' : 'false'}</p>
        <button type="button" onClick={() => {this.switch();}}>点我试试</button>
      </div>
    );
  }
};

export default Form;
