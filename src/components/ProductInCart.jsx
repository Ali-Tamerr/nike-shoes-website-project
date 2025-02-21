import React from 'react';
import { removeIcon } from '../assets/icons';

const ProductInCart = ({ product, onRemove }) => {
    return (
        <div className="flex max-md:flex-col max-md:items-start gap-8 font-montserrat w-full justify-start">
            <div className='flex gap-5'>
                <img src={product.imgURL} alt={product.name} className="w-40" />
                <div className="flex flex-col gap-8">
                    <h3 className='text-2xl'>{product.name}</h3>
                    <p className='text-3xl font-bold'>{product.price}</p>
                </div>
            </div>
            <button
                className='justify-end max-md:ml-0 ml-auto self-start border-4 border-coral-red rounded-full'
                onClick={() => onRemove(product.name)}
            >
                <img src={removeIcon} alt="remove" className='w-[40px]' />
            </button>
        </div>
    );
}

export default ProductInCart;