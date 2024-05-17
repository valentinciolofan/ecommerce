import React from 'react'
import { userSession, cartStore } from '../../UserContext';
import { useStore } from '@nanostores/react';
import urlFor from '../../../utils/urlFor';
import './Modal.css'




export const UserIconDropDown = ({ session, handleLogOut }) => {

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


export const UserCartIconDropDown = ({ session }) => {
  const products = useStore(cartStore);
  console.log(products);

  return (
    <div className='dropdownmenu-container'>
      <div className='dropdownmenu-content'>

        <ul className='unordered-modal-list'>
        {products.items.map((product) => (
          <li key={product.slug}>
            <a href={"/product/" + product.slug}>
              <div className="products">
                <img className="cart-product-img" src={urlFor(product.image).url()} alt="" />
                <div className="product-details">
                  <span>{product.title}</span>
                  <span>${product.price}</span>
                </div>
              </div>
            </a>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

