
import * as React from 'react';



export const Loginregister = () => {
  const [admin] = React.useState('admin');
  const [donor] = React.useState('donor');
  const [agent] = React.useState('agent');
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
          { label: 'Login As Existing', value: 'log' },
          { label: 'Register As New', value: 'new'}
        ]}
        value={admin}
      />

      <Dropdown 
        options={[
          { label: 'DONOR', value: 'DONOR' },
          { label: 'Login As Existing', value: 'log'},
          { label: 'Register As New', value: 'new' },
        ]}
        value={donor}

      />
            <Dropdown 
        options={[
          { label: 'AGENT', value: 'AGENT' },
          { label: 'Login As Existing', value: 'log' },
          { label: 'Register As New', value: 'new' },
        ]}
        value={agent}
      />
    </div>
  );
};


