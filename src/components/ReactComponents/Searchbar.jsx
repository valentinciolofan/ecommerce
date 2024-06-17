import React, { useState } from 'react'
import { useStore } from '@nanostores/react';
import { searchBoxValue } from '../UserContext';

const SearchBar = () => {
    const inputValue = useStore(searchBoxValue);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        searchBoxValue.set(inputValue);
    }

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