import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class SelectComponent extends React.Component {
  state = {
    value: []
  }

  getData (keyword) {
    if (!keyword) {
      return Promise.resolve({ options: [] });
    }

    return fetch(`https://api.github.com/search/users?q=${keyword}`)
    .then((response) => response.json())
    .then((json) => {
      return { options: json.items };
    });
  }

  onChange (value) {
    this.setState({
      value: value,
    });
  }

  render() {
    const { creatable, multi } = this.props;
    const AsyncComponent = creatable
      ? Select.AsyncCreatable
      : Select.Async;

    return (
      <AsyncComponent
        multi={multi}
        value={this.state.value}
        onChange={(val) => { this.onChange(val); }}
        valueKey="id"
        labelKey="login"
        loadOptions={(keyword) => { return this.getData(keyword); }}
        backspaceRemoves={this.state.backspaceRemoves}
      />
    );
  }
};

SelectComponent.propTypes = {
  creatable: PropTypes.bool,
  multi: PropTypes.bool
};


SelectComponent.defaultProps =  {
  creatable: true,
  multi: true
}

export default SelectComponent;
