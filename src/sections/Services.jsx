import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"
const Services = () => {
  return (
    <section>
      <div className="flex justify-between gap-6 max-xl:gap-4 max-sm:flex-col">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>

  )
}

export default Services