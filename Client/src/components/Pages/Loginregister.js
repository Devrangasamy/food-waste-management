
import * as React from 'react';

export const Loginregister = () => {
  const [food] = React.useState('fruit');
  const [drink] = React.useState('water');
  const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label className='dr'>
        {label}
        <select className='dr' value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };
  

  return (
    <div className='drop'>
      <Dropdown 
        options={[
          { label: 'ADMIN', value: 'ADMIN' },
          { label: 'login as existing', value: 'log' },
          { label: 'register as new', value: 'new' },
        ]}
        value={food}
      />

      <Dropdown 
        options={[
          { label: 'DONOR', value: 'DONOR' },
          { label: 'login as existing', value: 'log' },
          { label: 'register as new', value: 'new' },
        ]}
        value={drink}

      />
            <Dropdown 
        options={[
          { label: 'AGENT', value: 'AGENT' },
          { label: 'login as existing', value: 'log' },
          { label: 'register as new', value: 'new' },
        ]}
        value={drink}
      />
    </div>
  );
};


