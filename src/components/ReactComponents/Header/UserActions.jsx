// src/components/UserActions.jsx
import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { userSession, checkSession } from '../../UserContext';
import UserIcon  from './UserIcon';
import UserWishlistIcon   from './UserWishlistIcon';
import UserCartIcon from './UserCartIcon';


const UserActions = () => {
  let session = useStore(userSession);
  
  const handleLogOut = async () => {
    try {
      const response = await fetch('http://localhost:3000/logout', {
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
      <UserIcon session={session} handleLogOut={handleLogOut}/>
      <UserWishlistIcon session={session} />
      <UserCartIcon session={session}/>
    </>
  );
}

export default UserActions;
