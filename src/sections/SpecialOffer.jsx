import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className="lg:h-[500px] flex w-full justify-end items-center lg:text-end gap-[20px] max-lg:flex-col max-lg:gap-10">
      <div>
        <img className="h-[550px] max-lg:h-[360px]" src={offer} alt="" />
      </div>
      <div className="flex justify-between w-full flex-col h-[70%] max-lg:gap-4">
        <h3 className="text-4xl xl:text-[60px] font-palanquin font-bold"><span className="text-coral-red">Special</span> Offer</h3>
        <p className="lg:max-w-2xl xl:text-lg xl:max-w-4xl font-montserrat text-slate-gray lg:self-end">Embark on shopping journey that redefines your experience with unbeatable deals. From prmier sekections to incredible saving, we offer unparalled value that sets us apart.</p>
        <p className="lg:max-w-2xl xl:text-lg xl:max-w-4xl font-montserrat text-slate-gray lg:self-end">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex gap-4 mt-8 max-sm:flex-col lg:self-end">
          <Button label="View details" iconURL=""/>
          <Button label="Learn more" btnCustom={"bg-white text-slate-gray border-slate-gray hover:bg-slate-gray hover:text-white hover:border-none"}/>
        </div>
      </div>
      
    </section>
  )
}

export default SpecialOffer