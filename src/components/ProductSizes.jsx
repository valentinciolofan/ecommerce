// src/components/ReactComponents/ProductSizeSelector.jsx
import React, { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { productDetailsStore } from './UserContext'; // Correct import of the nanostore

const ProductSizes = ({ sizes }) => {
    const productDetails = useStore(productDetailsStore);

    // Initialize store with the first available size
    useEffect(() => {
        if (sizes && sizes.length > 0 && !productDetails.selectedSize) {
            productDetailsStore.set({
                ...productDetails,
                selectedSize: sizes[0].size,
            });
        }
    }, [sizes, productDetails]);

    // Handle size selection
    const handleSizeClick = (size) => {
        productDetailsStore.set({
            ...productDetails,
            selectedSize: size,
        });
        console.log(productDetailsStore.get().selectedSize + ' size selected');
    };

    return (
        <>
         <ul className="product-sizes-list">
            {sizes && sizes.map((size) => (
                <li
                    key={size.size}
                    className={`size-option ${size.size === productDetails.selectedSize ? 'selected' : ''}`}
                    onClick={() => handleSizeClick(size.size)}
                >
                    {size.size.toUpperCase()}
                </li>
            ))}
        </ul>
        </>
       
    );
};

export default ProductSizes;
