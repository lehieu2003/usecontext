import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export default function Header() {
  const {user, isOpen,setIsOpen,themeStyle, isDay, setIsDay} = useContext(AppContext);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const toogleTheme = () => {
    setIsDay(!isDay);
  }

  return (
    <div
      className='header'
      style={{
        ... themeStyle,
        display: 'flex',
        justifyContent: 'right',
        padding: '10px',
        gridColumn: isOpen ? '2 / 4' : '1 / 4',
        gridRow: '1 / 2',
      }}
    >
      <div>Hello! {user.last_name} </div>
      <p style={{ cursor: 'pointer' }} onClick={toggleSidebar}>My profile</p>
      <label className='switch'>
        <input
          type= "checkbox"
          checked= {isDay}
          onChange={toogleTheme}
        />
          
      </label>
    </div>
  );
}
