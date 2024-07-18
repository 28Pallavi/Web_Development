import React from 'react';
import Header from './Header';
import GuestTable from './GuestTable';

const MainContent = () => {
  return (
    <div className="w-5/6 p-4">
      <Header />
      <GuestTable />
    </div>
  );
}

export default MainContent;
