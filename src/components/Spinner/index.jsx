import React from 'react';
import PropTypes from 'prop-types';

export const Spinner = (props) => {
  const { center, text } = props;
  return (
    <div
      className={center ? 'col col__mainAxis--center col__crossAxis--center' : ''}
      style={{ height: center ? '100%' : 'none' }}
    >
      {text ? <span>{text}</span> : <span>Loading...</span>}
    </div>
  );
};

Spinner.propTypes = {
  center: PropTypes.bool,
  text: PropTypes.string,
};

Spinner.defaultProps = {
  center: false,
  text: '',
};
