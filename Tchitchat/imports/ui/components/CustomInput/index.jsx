import React from 'react';
import StyledInput from './StyledInput';

const CustomInput = ({ update, name, label, ...rest }) => (
  <div>
    <label htmlFor={name}>{label}</label><br/>
    <StyledInput
      onChange={(e) =>
        update(e, e.target || {})
      }
      name={ name }
      {...rest}
    />
  </div>
);

export default CustomInput;
