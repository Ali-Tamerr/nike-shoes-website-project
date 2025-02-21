import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex justify-start flex-col gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
      </div>
      <div className="mt-16 flex gap-10 justify-between max-xl:grid max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts