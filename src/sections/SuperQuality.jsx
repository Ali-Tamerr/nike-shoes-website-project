import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section className="flex w-full justify-between items-center max-lg:flex-col gap-20 lg:h-[500px]">
      <div className="flex justify-between flex-col h-[74%] max-lg:gap-6">
        <h3 className="text-4xl font-palanquin font-bold">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h3>
        <p className="lg:max-w-lg font-montserrat text-slate-gray text-lg">Ensuring premium comfort and style , our meticulosly crafterd foorwear is designed to evaluate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="lg:max-w-lg font-montserrat text-slate-gray text-lg">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="">
          <Button label="View details" iconURL="" />
        </div>
      </div>
      <div className="flex justify-center">
        <img src={shoe8} alt="" className="w-[80%] h-[80%] object-contain"/>
      </div>
    </section>

  )
}

export default SuperQuality