import React from 'react';
import PropTypes from 'prop-types';

const FormWrapper = Component => {
  class Wrapper extends React.PureComponent {
    static displayName = `LoadingWrapper(${Component.name})`
    static propTypes = {
      data: PropTypes.object,
      isSkipLoading: PropTypes.bool
    }

    static defaultProps = {
      data: {},
      isSkipLoading: false
    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  return Wrapper;
};

export default FormWrapper;
