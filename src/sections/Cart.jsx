import React, { useState, useEffect } from 'react'
import ProductInCart from '../components/ProductInCart';
import { deleteIcon } from '../assets/icons';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { products } from '../constants';

const Cart = ({ cartCount, resetCart, setCartCount }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [isDivOpened, setIsDivOpened] = useState(false);
    const [isDiv2Opened, setIsDiv2Opened] = useState(false);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        setCartProducts(storedProducts);
    }, [cartCount]);

    const removeProduct = (productName) => {
        const updatedProducts = cartProducts.filter(product => product.name !== productName);
        setCartProducts(updatedProducts);
        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
        setCartCount(prevCount => prevCount - 1);
        localStorage.removeItem(`addToCartLabel-${productName}`);
    };
    const OpenCloseDiv = () => {
        setIsDivOpened(!isDivOpened);
    }
    const OpenCloseDiv2 = () => {
        setIsDiv2Opened(!isDiv2Opened);
    }

    const totalPrice = cartProducts.reduce((total, product) => {
        const price = parseFloat(product.price.replace('$', ''));
        return total + price;
    }, 0);

    return (
        <div className='min-h-[700px] pt-[130px]'>
            {cartCount === 0 ? (
                <div className='flex justify-center flex-col gap-10'>
                    <p className='text-2xl text-center max-md:text-lg text-slate-gray'>No Products have been added to the cart!</p>
                    <Link to={'/'} className='flex justify-center'>
                    <Button label="Go to Home page" Padding={'px-16 max-md:px-10 py-4'} />
                    </Link>
                </div>
            ) : (
                <div className='flex flex-col gap-10 box-border min-h-[700px] font-montserrat'>
                    <div className='flex'>
                        <button onClick={OpenCloseDiv2}>
                            <img src={deleteIcon} alt="delete all" className='w-[50px]' />
                        </button>
                    </div>
                    <div className='flex flex-col gap-8'>
                        {cartProducts.map((product, index) => {
                            return(
                                <div key={index}>
                                    <ProductInCart product={product} onRemove={removeProduct} />
                                    {index < cartProducts.length - 1 && <hr className="w-full my-8 max-md:my-12 bg-black" />}
                                </div>
                            );
                        })}
                        
                    </div>
                    <div className='mt-auto flex justify-center gap-10 items-center w-full max-lg:bg-white max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:right-0 max-lg:z-50 max-lg:py-4 max-lg:shadow-[0px_-1px_20px_rgba(0,0,0,0.2)]' onClick={OpenCloseDiv}>
                        <p className='text-xl font-semibold max-md:text-lg max-md:w-[80px]'>Total: <span className='font-normal'>${totalPrice.toFixed(2)}</span></p>
                        <Button label="Checkout" Padding={'px-20 max-md:px-8 py-4'} />
                    </div>

                    <div className={`fixed ${isDivOpened ? "flex" : "hidden pointer-events-none"} transition justify-center z-30 items-center inset-0 `}>
                        <div className={`fixed inset-0 bg-black transition-all ${isDivOpened ? "opacity-30" : "opacity-0"}`} onClick={OpenCloseDiv}></div>
                        <div className={`outline outline-3 z-50 outline-coral-red px-12 py-16 rounded-xl flex flex-col bg-white items-center gap-16  transition-all ${isDivOpened ? "opacity-100" : "opacity-0"}`}>
                            <p className='text-xl font-semibold text-black'>Are you sure to submit?</p>
                            <div className='flex gap-8 items-center'>
                                <Link to={"/cart/checkout"} onClick={resetCart}>
                                    <Button label={"Submit"} />
                                </Link>
                                <div onClick={OpenCloseDiv}>
                                    <Button label={"Cancel"} btnCustom={"bg-white text-slate-gray border-slate-gray hover:bg-slate-gray hover:text-white hover:border-none"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`fixed ${isDiv2Opened ? "flex" : "hidden pointer-events-none"} transition justify-center z-30 items-center inset-0 `}>
                        <div className={`fixed inset-0 bg-black transition-all ${isDiv2Opened ? "opacity-30" : "opacity-0"}`} onClick={OpenCloseDiv2}></div>
                        <div className={`outline outline-3 z-50 outline-coral-red px-12 py-16 rounded-xl flex flex-col bg-white items-center gap-16  transition-all ${isDiv2Opened ? "opacity-100" : "opacity-0"}`}>
                            <p className='text-xl max-w-[250px] text-center font-semibold text-black'>Do you want to remove all from the cart?</p>
                            <div className='flex gap-8 items-center'>
                                <Link to={"/cart"} onClick={resetCart}>
                                    <Button label={"Reset"} />
                                </Link>
                                <div onClick={OpenCloseDiv2}>
                                    <Button label={"Cancel"} btnCustom={"bg-white text-slate-gray border-slate-gray hover:bg-slate-gray hover:text-white hover:border-none"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart