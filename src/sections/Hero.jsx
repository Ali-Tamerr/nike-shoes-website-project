import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home"
    className="w-full flex xl:flex-row flex-col 
     xl:justify-center justify-center min-h-screen max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 max-xl:mb-20">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-7xl 
        max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray 
          text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, 
            quality comfort, and innovation for
            your active life.
          </p>
          <Link to={'/products'}>
          <Button label="Shop now" iconURL={arrowRight} />

          </Link>

          <div className="flex justify-start items-center flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))}
          </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center 
      xl:min-h-screen max-xl:pb-60 max-xl:pt-20 bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe collection"
          className="object-contain relative w-[610px] max-wide:w-[60%] max-2xl:w-[70%] h- z-9"
         />
         <div className="flex sm:gap-6 gap-4 absolute
         bottom-[2%] lg:left-[3%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg} />
            </div>
          ))}
         </div>
      </div>
    </section>
  )
}

export default Hero