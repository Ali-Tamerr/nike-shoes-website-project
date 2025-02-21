const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={` outline border-[3.5px]  border-transparent rounded-[14.7px]
        big-shoe-card ${bigShoeImg === imgURL.bigShoe 
        ? 'outline-coral-red' : 'outline-transparent'}
        cursor-pointer max-sm:flex-1  -outline-offset-[4px] outline-[5px] hover:border-black-half-transparent  transition`} 
        onClick={handleClick}>
            <div className="flex justify-center items-center bg-card
             bg-center bg-cover sm:h-[12rem] rounded-[12px] h-[103px] max-sm:p-4 ">
                <img src={imgURL.thumbnail} alt="shoe collection" 
                width={157} height={103}
                className="object-contain p-3 max-md:p-0"/>
            </div>
        </div>
  )
}

export default ShoeCard