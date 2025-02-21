import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const CheckoutCompleted = () => {
  return (
    <div className='h-screen flex flex-col gap-10 items-center justify-center font-montserrat'>
        <p className='text-4xl font-semibold text-center'>Checkout <span className='text-coral-red'>Completed!</span></p>
        <Link to={'/nike-shoes-website-project/'}>
        <Button label={"Back to Home"} />
        </Link>
    </div>
  )
}

export default CheckoutCompleted