import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const Toggle = (props) => {
  const { onChange, isChecked, ariaLabel, theme } = props;
  const [isCheckedFromState, setIsCheckedFromState] = useState(isChecked);

  function onChangeLocal(e) {
    setIsCheckedFromState(!isCheckedFromState);
    onChange(e);
  }

  return <label className={`h-8 w-14 relative inline-block`} aria-label={ariaLabel}>
    <input type="checkbox" checked={isCheckedFromState} onChange={onChangeLocal} className="opacity-0 w-0 h-0" />
    <span
      className={`${isCheckedFromState ? `bg-${theme}-900` : `bg-${theme}-700`} rounded-3xl absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-all`}
    >
    </span>
    <span
      aria-hidden="true"
      className={`${isCheckedFromState ? "translate-x-6" : "translate-x-0"} pointer-events-none absolute h-6 w-6 left-1 bottom-1 bg-white transform rounded-full transition-all`}
    />
  </label>
};

Toggle.defaultProps = {
  onChange: () => { },
  isChecked: false,
  ariaLabel: "toggle",
  theme: "purple",
};

Toggle.propType = {
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  ariaLabel: PropTypes.string,
  theme: PropTypes.string,
};