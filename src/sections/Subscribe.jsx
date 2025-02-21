import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container sm:px-16 px-[3%] sm:py-10 py-12">
      <h2 className="font-palanquin text-4xl font-bold w-full">Sign Up for <span className="text-coral-red">Updates</span> & Newsletters</h2>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" className="input w-full focus:placeholder-text-sm" placeholder="Your email address"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up"></Button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe