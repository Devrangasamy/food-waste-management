
import * as React from 'react';



export const Loginregister = () => {
  const [food] = React.useState('fruit');
  const [drink] = React.useState('water');
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
          { label: 'Login As Existing', value: 'log' },
          { label: 'Register As New', value: 'new'}
        ]}
        value={food}
      />

      <Dropdown 
        options={[
          { label: 'DONOR', value: 'DONOR' },
          { label: 'Login As Existing', value: 'log'},
          { label: 'Register As New', value: 'new' },
        ]}
        value={drink}

      />
            <Dropdown 
        options={[
          { label: 'AGENT', value: 'AGENT' },
          { label: 'Login As Existing', value: 'log' },
          { label: 'Register As New', value: 'new' },
        ]}
        value={drink}
      />
    </div>
  );
};


