import React, { useState, useEffect } from 'react';

const collections = ['Jackets', 'Shirts', 'Pants', 'T-shirts', 'Shorts']

const CollectionsFilter = ({ onCollectionsChange, onFilterChange }) => {
  const [selectedCollections, setSelectedCollections] = useState([]);


  const handleCollectionsChange = (e) => {
    const collection = e.target.value;

    let newSelectedCollections = [];

    if (selectedCollections.includes(collection)) {
      newSelectedCollections = selectedCollections.filter((c) => c !== collection);
    } else {
      newSelectedCollections = [...selectedCollections, collection];
    }
    setSelectedCollections(newSelectedCollections);
    onCollectionsChange(newSelectedCollections);
  }

  return (
    <div className="collections-filter">
      <label htmlFor="category">Collections: </label>
      {collections.map(collection =>
        <label
          className="custom-checkbox"
          key={collection}
        >
          <input
            type="checkbox"
            value={collection}
            onChange={handleCollectionsChange}
          />
          <span className="checkmark"></span>
          {collection}
        </label>
      )}
    </div>
  );
}

export default CollectionsFilter;
