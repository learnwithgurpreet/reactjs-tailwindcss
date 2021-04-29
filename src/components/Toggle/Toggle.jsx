import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { SIZES } from './constants';
import './index.css';

export const Toggle = (props) => {
  const { className, onChange, isChecked, ariaLabel } = props;
  const [isCheckedFromState, setIsCheckedFromState] = useState(isChecked);

  function onChangeLocal() {
    setIsCheckedFromState(!isCheckedFromState);
    onChange(e);
  }

  return <label className={`switch ${className}`} aria-label={ariaLabel}>
    <input type="checkbox" checked={isCheckedFromState} onChange={onChangeLocal} />
    <span className="rounded-3xl"></span>
  </label>
};

Toggle.defaultProps = {
  isChecked: false,
  onChange: () => { },
  ariaLabel: "toggle",
};

Toggle.propType = {
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
};