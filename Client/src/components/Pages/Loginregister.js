
import * as React from 'react';

export const Loginregister = () => {
  const [admin] = React.useState('admin');
  const [donor] = React.useState('donor');
  const [agent] = React.useState('agent');
  const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label>
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
      <Dropdown  className='dr'
        options={[
          { label: 'ADMIN', value: 'ADMIN' },
          { label: 'login as existing', value: 'log' },
          { label: 'register as new', value: 'new' },
        ]}
        value={admin}
      />

      <Dropdown 
        options={[
          { label: 'DONOR', value: 'DONOR' },
          { label: 'login as existing', value: 'log' },
          { label: 'register as new', value: 'new' },
        ]}
        value={donor}
      />
            <Dropdown 
        options={[
          { label: 'AGENT', value: 'AGENT' },
          { label: 'login as existing', value: 'log' },
          { label: 'register as new', value: 'new' },
        ]}
        value={agent}
      />
    </div>
  );
};


