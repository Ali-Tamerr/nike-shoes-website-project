import CustomerReviewsCard from "../components/CustomerReviewsCard"
import { reviews } from "../constants"
const CustomerReviews = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col gap-6 text-center">
        <h3 className="text-4xl font-palanquin font-bold">What Our <span className="text-coral-red">Customers</span> Say?</h3>
        <p className="font-montserrat text-slate-gray">Hear genuine stories from our satisfied customers about <br /> their exceptional experiences with us.</p>
      </div>
      <div className="flex max-lg:flex-col h-max max-lg:gap-[60px] items-center gap-10 w-full justify-around">
        {reviews.map((review) => (
          <CustomerReviewsCard key={review.customerName} {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews