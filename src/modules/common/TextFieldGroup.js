import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  className,
  name,
  placeholder,
  value,
  label,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form__group">
      <label className="form__label">{label}</label>
      <input 
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;