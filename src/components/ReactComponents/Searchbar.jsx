import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { searchBoxValue } from '../UserContext';
import './mystyle.css'; 

const SearchBar = () => {
    const inputValue = useStore(searchBoxValue);
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        searchBoxValue.set(inputValue);
    };

    const toggleSearchBar = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            inputRef.current.focus();
        } else {
            inputRef.current.blur();
        }
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsOpen(false);
            inputRef.current.blur();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={containerRef} className={`search-container ${isOpen ? 'open' : ''}`}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Search for a product"
                value={inputValue}
                className="search-bar"
                onChange={handleInputChange}
            />
            <span className="searchBox-svg" onClick={toggleSearchBar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path>
                </svg>
            </span>
        </div>
    );
};

export default SearchBar;
