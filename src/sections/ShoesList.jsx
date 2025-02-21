import React from 'react'
import { products } from '../constants';
import Button from '../components/Button';
import { star } from '../assets/icons';
import { Link } from 'react-router-dom';
const ShoesList = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
        <div className="pt-32 flex min-h-[60vh] flex-col">
    {products
      .map((product, index) => {
        {/* const [addToCartLabel, setAddToCartLabel] = useAddToCartLabel(product.name); */ }
        return (
          <div className='flex flex-col'>
            <div key={product.name} className='w-full max-md:flex-col max-lg:items-center flex gap-8'>
              <img src={product.imgURL} alt={product.name}
                className="max-w-[200px] w-full" />
              <div className='flex flex-col max-md:items-center'>
                <h3 className="text-3xl leading-normal w-max font-semibold font-palanquin cursor-pointer">{product.name}</h3>
                <div className="mt-8 w-max flex justify-start gap-2.5">
                  <img src={star} alt="rating" width={24} height={24} />
                  <p className="font-montserrat leading-normal text-slate-gray cursor-pointer">{product.rate}</p>
                </div>
                <p className="mt-2 font-semibold font-montserrat w-max text-2xl leading-normal cursor-pointer text-coral-red text-2lxl">{product.price}</p>
              </div>
              <div className='flex flex-col ml-auto items-end max-md:ml-0 max-lg:items-center'>
                {/* <div onClick={ClickSuccess(addToCartLabel, setAddToCartLabel, product)}>
              <Button label={addToCartLabel}/>
              </div> */}

                <Link to={`/product/${product.name}`} onClick={handleClick}>
                  <Button label={"View details"} />
                </Link>
              </div>
            </div>
            {index < products.length - 1 && <hr className="w-full my-8 max-md:my-12 bg-black" />}
          </div>
        );
      })}
  </div>
  </div>
  )
}

export default ShoesList