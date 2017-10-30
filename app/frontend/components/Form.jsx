import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class Form extends React.Component {
  logChange(val) {
    console.log('Selected: ', val);
  }

  render() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

    return (
      <Select
        name="form-field-name"
        value="one"
        options={options}
        onChange={() => {this.logChange();}}
      />
    );
  }
};

export default Form;
