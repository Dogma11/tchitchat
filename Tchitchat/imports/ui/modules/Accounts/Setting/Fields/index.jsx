import React from 'react';
import fields from './array';

const Fields = ({ update, state }) => {
    return fields.map(field => {
        const Comp = cerr(field.component)
        return (
            <Comp
                type={field.type}
                key={field.name}
                update={update}
                name={field.name}
                options={field.options}
                color={field.color}
                value={state[field.value]}
            />
        )
    })
  };


export default Fields;
