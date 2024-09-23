import React, { useState, useEffect } from 'react';

const collections = ['Jackets', 'Shirts', 'Pants', 'T-shirts', 'Shorts'];

const CollectionsFilter = ({ onCollectionsChange }) => {
  const [selectedCollections, setSelectedCollections] = useState([]);

  // Use effect to initialize state from localStorage (if needed)
  useEffect(() => {
    const preSelectedCollection = window.localStorage.getItem('shopFilter');
    if (preSelectedCollection) {
      setSelectedCollections(preSelectedCollection.split(','));
      onCollectionsChange(preSelectedCollection.split(','));
    }
  }, []);

  const handleCollectionsChange = (e) => {
    let collection = e.target.value;
    let newSelectedCollections = [];

    if (selectedCollections.includes(collection)) {
      // If it's already selected, remove it
      newSelectedCollections = selectedCollections.filter((c) => c !== collection);
    } else {
      // If it's not selected, add it to the list
      newSelectedCollections = [...selectedCollections, collection];
    }

    // Update the state and parent component's state
    setSelectedCollections(newSelectedCollections);
    onCollectionsChange(newSelectedCollections);

    // Save updated selections in localStorage
    window.localStorage.setItem('shopFilter', newSelectedCollections.join(','));
  };

  return (
    <div className="collections-filter">
      <label htmlFor="category">Collections: </label>
      {collections.map((collection) => (
        <label className="custom-checkbox" key={collection}>
          <input
            type="checkbox"
            value={collection}
            onChange={handleCollectionsChange}
            // Add checked attribute based on whether the collection is selected
            checked={selectedCollections.includes(collection)}
          />
          <span className="checkmark"></span>
          {collection}
        </label>
      ))}
    </div>
  );
};

export default CollectionsFilter;
