import React, { useState } from 'react'
import { UserCartIconDropDown } from "./Modal"
 
const UserCartIcon = ({ session }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = (e) => {
        window.location.href = "/cart";

        console.log(e);
    }

    const onMouseOver = async (e) => {
        if (true) {
           setShowDropdown(true);
        }
   }
   
   const onMouseOut = () => {
       setShowDropdown(false);
   };
    return (
     <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={{ position: 'relative', display: 'inline-block' }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 14 14"
            onClick={handleClick}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.28 6H1.72a1 1 0 0 0-1 1.2l1.1 5.5a1 1 0 0 0 1 .8h8.36a1 1 0 0 0 1-.8l1.1-5.5a1 1 0 0 0-1-1.2M9 2.5L11 6M3 6l2-3.5"
            />
        </svg>

        {showDropdown && <UserCartIconDropDown />}
        </div>
    )
}
export default UserCartIcon;