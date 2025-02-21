const ServiceCard = ({...services}) => {
  return (
    <div className="flex flex-col gap-4 p-6 outline outline-1 outline-coral-red rounded-3xl max-w-[1440px]">
      <div className="w-16 h-16 bg-coral-red rounded-full flex justify-center items-center">
        <img width={24} height={24} src={services.imgURL} alt={services.label} />
      </div>
      <h3 className="text-2xl font-palanquin">{services.label}</h3>
      <p className="font-montserrat text-slate-gray">{services.subtext}</p>
    </div>
  )
}

export default ServiceCard