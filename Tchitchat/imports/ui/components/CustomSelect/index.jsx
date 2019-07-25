import React from 'react';
import StyledSelect from './StyledSelect';

const CustomSelect = ({ update, options, name, label, ...rest }) => 
{
  const renderOptions = Array.isArray(options)
  ? options.map(option => (
      <option value={option.value} key={option.value} >{option.text}</option>
    ))
  : null

  return (
    <div>
      <label htmlFor={name}>{label}</label><br/>
      <StyledSelect
        onChange={(e) =>
          update(e, e.target || {})
        }
        {...rest}
      >
        {renderOptions}
      </StyledSelect>
    </div>
  );
} 

export default CustomSelect;
