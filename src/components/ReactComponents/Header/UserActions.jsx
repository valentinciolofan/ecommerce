// src/components/UserActions.jsx
import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { userSession, checkSession } from '../../UserContext';
import UserIcon from './UserIcon';
import UserWishlistIcon from './UserWishlistIcon';
import UserCartIcon from './UserCartIcon';
import SearchBar from '../Searchbar';



const UserActions = () => {
  let session = useStore(userSession);
  
  const handleLogOut = async () => {
    const apiUrl = import.meta.env.PUBLIC_API_URL;
    try {
      const response = await fetch(`${apiUrl}/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        userSession.set(false);
        window.location.href = '/login'
      } else {
        throw new Error('Failed to log out');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  return (
    <>
      <div className='searchBar-disable'>
        <SearchBar />
      </div>
      <UserIcon session={session} handleLogOut={handleLogOut} />
      <UserWishlistIcon session={session} />
      <UserCartIcon session={session} />
    </>
  );
}

export default UserActions;
