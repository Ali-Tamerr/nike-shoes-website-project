const Button = ({label, iconURL, btnCustom, fullWidth, Padding }) => {
  return (
    <button className={`flex justify-center items-center gap-2  border font-montserrat  leading-none rounded-full whitespace-nowrap
      ${btnCustom? btnCustom : 'text-lg bg-coral-red hover:bg-white border-coral-red text-white hover:text-coral-red hover:border-coral-red'}${fullWidth? fullWidth : 'w-full'} ${Padding? Padding : 'px-7 py-4'}`}>
        {label}
        {iconURL?  
        <img
        src={iconURL} alt="arrow right icon" 
        className="ml-2 rounded-full w-5 h-5"/>
        : null}
        </button>
  )
}

export default Button