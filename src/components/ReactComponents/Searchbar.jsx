import React, { useEffect, useState } from 'react'


const SearchBar = ({ handleInputChange, products }) => {
    const [inputValue, setInputValue] = useState('');
 

    return (
        <div className="searchBox-container">
            <input 
            type="text" 
            placeholder="Search for a product"
            onChange={handleInputChange} />
        </div>
    );
}

export default SearchBar;