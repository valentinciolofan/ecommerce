import React from 'react'
import { userSession } from '../../UserContext';
import './Modal.css'




export const UserIconDropDown = ({session, handleLogOut}) => {

  return (
    <div className='dropdownmenu-container'>
      <div className='dropdownmenu-content'>
        <strong>Hello, {session.name}</strong>
        <ul className='unordered-modal-list'>
            <a className="header-user-actions" href='/profile'>View my profile</a>
            <a className="header-user-actions" onClick={handleLogOut}>Log out</a>
        </ul>
      </div>
    </div>
  );
};

export const UserFavoriteListIconDropDown = () => {

  return (
    <>
     <div className='dropdownmenu-container'>
      <div className='dropdownmenu-content'>
        <strong>Hello, {user}</strong>
        <ul className='unordered-modal-list'>
            <a className="header-user-actions" href='/profile'>View my profile</a>
            <a className="header-user-actions" onClick={handleLogOut}>Log out</a>
        </ul>
      </div>
    </div>
    </>
  );
}


export const UserCartIconDropDown = () => {

  return (
    <>
     <div className='dropdownmenu-container'>
      <div className='dropdownmenu-content'>
        <strong>Hello, {user}</strong>
        <ul className='unordered-modal-list'>
            <a className="header-user-actions" href='/profile'>View my profile</a>
            <a className="header-user-actions" onClick={handleLogOut}>Log out</a>
        </ul>
      </div>
    </div>
    </>
  );
}

