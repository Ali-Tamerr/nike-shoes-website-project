import { useState, useEffect } from 'react';

const useAddToCartLabel = (productName) => {
    const [addToCartLabel, setAddToCartLabel] = useState(() => {
        localStorage.getItem(`addToCartLabel-${productName}`);
    });

    useEffect(() => {
        const savedLabel = localStorage.getItem(`addToCartLabel-${productName}`);
        if (savedLabel) {
            setAddToCartLabel(savedLabel);
        } else {
            setAddToCartLabel("Add to cart");
        }
    }, [productName]);

    return [addToCartLabel, setAddToCartLabel];
};

export default useAddToCartLabel;
