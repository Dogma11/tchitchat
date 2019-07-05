import React from 'react';
import StyledSelect from './StyledSelect';

const CustomSelect = ({ update, options, ...rest }) => 
{
  const renderOptions = Array.isArray(options)
  ? options.map(option => (
      <option value={option.value} key={option.value} >{option.text}</option>
    ))
  : null

  return (
    <div>
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
