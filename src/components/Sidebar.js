import React, { useContext } from 'react';
import UserInformation from './UserInformation';
import { AppContext } from '../Context/AppContext';
import App from '../App';
export default function Sidebar() {
  const {isOpen} = useContext(AppContext);

  if (!isOpen) return null;
  return (
    <div
      className='sidebar'
      style={{
        backgroundColor: 'rgb(228, 228, 228)',
        padding: 10,
        gridColumn: '1 / 2',
        gridRow: '1 / 3',
      }}
    >
      <h2>Sidebar</h2>
      <UserInformation />
    </div>
  );
}
