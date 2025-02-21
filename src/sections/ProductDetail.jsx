import { useParams } from 'react-router-dom';
import { products } from "../constants";
import { arrowRight, star } from "../assets/icons"
import Button from '../components/Button';
import { useRef, useState, useEffect } from 'react';
import PopularProductCard from '../components/PopularProductCard';
import useAddToCartLabel from '../hooks/useAddToCartLabel';



const ProductDetail = ({ incrementCartCount }) => {
    const { productName } = useParams();
    const product = products.find(p => p.name === productName);

    if (!product) {
        return <div>Product not found</div>;
    }

    const carouselRef = useRef(null);
    const [addToCartLabel, setAddToCartLabel] = useAddToCartLabel(productName);

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 236, behavior: 'smooth' });
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -236, behavior: 'smooth' });
        }
    };

    const ClickSuccess = () => {
        if (addToCartLabel === "Add to cart") {
            const newLabel = "Added to cart!";
            setAddToCartLabel(newLabel);
            incrementCartCount();

            const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
            const productDetails = { imgURL: product.imgURL, name: product.name, price: product.price };
            cartProducts.push(productDetails);
            localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

            localStorage.setItem(`addToCartLabel-${productName}`, newLabel);
        }
    };

    return (
        <div className='flex flex-col items-center w-full px-20 gap-20 pt-40 pb-20 font-montserrat'>
            <div className="flex w-full max-w-[1300px] gap-10 max-md:flex-col justify-between" >
                <img src={product.imgURL} alt={product.name} className="max-w-[280px] w-full" />
                <div className='flex flex-col justify-between gap-10' id='product-detail'>
                    <div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-4xl font-semibold max-sm:text-2xl'>{product.name}</h1>
                        </div>
                        <div className='flex flex-col gap-3 mt-2'>
                            <p className='text-xl'>Price: <span className='font-semibold'>{product.price}</span></p>
                            <div className="w-max flex justify-start items-end gap-2.5">
                                <img src={star} alt="rating" className='w-7'/>
                                <p className="font-montserrat text-xl text-slate-gray cursor-pointer">{product.rate}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full' onClick={ClickSuccess}>
                        <Button label={addToCartLabel} btnCustom="text-lg w-full bg-coral-red hover:bg-white border-coral-red text-white hover:text-coral-red hover:border-coral-red"/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full max-w-[1300px] gap-5'>
                <h3 className='text-3xl max-sm:text-2xl font-semibold'>More Pictures</h3>
                <div ref={carouselRef} className='flex gap-5 overflow-hidden carousel'>
                    <img src={product.imgURL} alt={product.name} className="max-w-[300px] w-full" />
                    <img src={product.imgURL} alt={product.name} className="max-w-[300px] w-full" />
                    <img src={product.imgURL} alt={product.name} className="max-w-[300px] w-full" />
                    <img src={product.imgURL} alt={product.name} className="max-w-[300px] w-full" />
                    <img src={product.imgURL} alt={product.name} className="max-w-[300px] w-full" />
                    <img src={product.imgURL} alt={product.name} className="max-w-[300px] w-full" />
                    <img src={product.imgURL} alt={product.name} className="max-w-[300px] w-full" />
                    <img src={product.imgURL} alt={product.name} className="max-w-[300px] w-full" />
                </div>
                <div className='flex justify-between'>
                    <img onClick={scrollLeft} src={arrowRight} width={70} alt="arrow left" className='rotate-180 cursor-pointer outline-transparent rounded-full outline hover:outline-coral-red' />
                    <img onClick={scrollRight} src={arrowRight} width={70} alt="arrow right" className='cursor-pointer outline-transparent rounded-full outline hover:outline-coral-red' />
                </div>
            </div>
            <div className='flex flex-col w-full max-w-[1300px] gap-5'>
                <h3 className='text-3xl max-sm:text-2xl font-semibold'>More Products</h3>
                <div className="mt-16 flex gap-10 justify-between max-xl:grid max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {products
                        .filter(p => p.name !== product.name)
                        .map((product) => (
                            <PopularProductCard key={product.name} {...product} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;