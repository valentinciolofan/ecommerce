import React, { useState, useEffect } from 'react'
import { useStore } from '@nanostores/react';
import { userSession } from '../../UserContext';
import { UserFavoriteListIconDropDown } from './Modal'

const UserWishlistIcon = ({ session }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const onMouseOver = async (e) => {
        if (session.get()) {
            console.log(session.get());
            setShowDropdown(true);
        }
    }
    const onMouseOut = () => {
        setShowDropdown(false);
    };

    const handleButtonClick = () => {
        localStorage.setItem('currentSection', 'profileWishlist');
        window.location.href = '/profile';
    };

    useEffect(() => {
        if (window.location.pathname !== '/profile') {
            localStorage.removeItem('currentSection');
        }
    }, [window.location.pathname])
    return (
        <>
            <svg
                onClick={handleButtonClick}
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
            ><path
                fill="currentColor"
                d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
            ></path>
            </svg>
            {showDropdown && <UserFavoriteListIconDropDown />}
        </>
    );
}
export default UserWishlistIcon;


export const AddToWishlist = () => {
    const session = useStore(userSession);
    const [isInWishlist, setIsInWishlist] = useState(false);

    const slug = window.location.pathname.slice(9);

    const saveDesiredProduct = async () => {
        if (session === null) {
            return alert('You need to be logged in to add products to wishlist!');
        }
        try {
            const apiUrl = import.meta.env.PUBLIC_API_URL;

            const response = await fetch(`${apiUrl}/wishlist`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productSlug: slug })
            });

            const result = await response.json();
            if (result.success) {
                console.log('Favorite saved successfully.');
                setIsInWishlist(true);
            } else {
                console.error('Failed to save favorite:', result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const removeWishlistProduct = async (e) => {
        try {
            const apiUrl = import.meta.env.PUBLIC_API_URL;

            const response = await fetch(`${apiUrl}/remove-wishlist-product`, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ slug }),
            });

            // Check if the response is OK
            if (!response.ok) {
                // If not, throw an error with the response status text
                throw new Error(`Error: ${response.statusText}`);
            }

            const removeProduct = await response.json();

            // If the product was successfully removed, update the state
            if (removeProduct.status === 'OK') {
                const updatedWishlist = session.wishlist.filter(product => product !== slug);
                userSession.set({ ...session, wishlist: updatedWishlist });
            } else {
                // Handle other potential statuses from the backend
                console.error('Error:', removeProduct.message || 'Failed to remove product from wishlist');
            }
        } catch (error) {
            // Handle any errors that occur during the fetch request or other operations
            console.error('Error handling wishlist product:', error.message);
            alert('An error occurred while trying to remove the product from your wishlist. Please try again later.');
        }
    };

    useEffect(() => {
        if (session !== null) {
            const product = session.wishlist.find(p => p === slug);
            setIsInWishlist(product !== undefined);
        }
    }, [session]);

    return (
        <>
            {isInWishlist ?
                <svg onClick={removeWishlistProduct} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"></path></svg>
                :
                <svg onClick={saveDesiredProduct} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"></path>
                </svg>
            }
        </>

    );
}
