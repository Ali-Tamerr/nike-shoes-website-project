import { footerLogo } from "../assets/images"
import { socialMedia, footerLinks } from "../constants"
const Footer = () => {
  return (
    <footer className="bg-black px-[10%] py-20 -mb-10 flex max-lg:px-[7%] flex-col gap-[70px]">
      <div className="flex align-start justify-between gap-14 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-10">
      <div className="flex flex-col gap-6 flex-1 ">
        <img width={145} src={footerLogo} alt="" className="mt-[2.5px]"/>
        <p className="font-montserrat text-gray-400 text-l max-w-[350px] max-xl:w-full">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
        <div className="flex gap-5 w-max">
          {socialMedia.map((icon) => (
            <img key={icon.alt} src={icon.src} alt={icon.alt} className="bg-white rounded-full w-[50px] max-lg:w-[40px] p-2" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 flex-1 ">
        <h3 className="font-montserrat text-3xl font-semibold text-white">Products</h3>
        <div className="flex flex-col gap-2">
          {footerLinks[0].links.map((link) => (
            <p key={link.name} className="font-montserrat text-gray-400 text-l">{link.name}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 flex-1 ">
        <h3 className="font-montserrat text-3xl font-semibold text-white">Help</h3>
        <div className="flex flex-col gap-2">
          {footerLinks[1].links.map((link) => (
            <p key={link.name} className="font-montserrat text-gray-400 text-l">{link.name}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 flex-1 ">
        <h3 className="font-montserrat text-3xl font-semibold text-white">Get in touch</h3>
        <div className="flex flex-col gap-2">
          {footerLinks[2].links.map((link) => (
            <p key={link.name} className="font-montserrat text-gray-400 text-l">{link.name}</p>
          ))}
        </div>
      </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-montserrat flex items-center gap-2 text-gray-400 text-l"> <span className="text-3xl">&copy;</span> Copyright, All Rights Reserved</p>
        <p className="font-montserrat text-gray-400 text-l">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer