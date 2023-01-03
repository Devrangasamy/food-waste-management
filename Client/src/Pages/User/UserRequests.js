import React from 'react';
import { UsernewRequests } from './UsernewRequest';
import { Userall } from './Userall';
import { Userpick } from './Userpick';
export const UserRequests = () => {
  return (
    <div className='sidebar'>
      <h1>Requests</h1>
    </div>
  );
};

export const UserNew = () => {
  return (
    <div className='sidebar'>
      <UsernewRequests></UsernewRequests>
    </div>
  );
};

export const UserPickcom = () => {
  return (
    <div className='sidebar'>
      <Userpick></Userpick>
    </div>
  );
};

export const UserAll = () => {
  return (
    <div className='sidebar'>
      <Userall></Userall>
    </div>
  );
};
