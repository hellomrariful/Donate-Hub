const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/kGyd7TD/Rectangle-4281.png"
        className="absolute object-cover w-full h-full"
        alt=""
      />

      <div className="-mt-36 relative">
        <div className="relative bg-[#FFFFFFF2] h-[700px]">
          <div className="text-center">
            <h3 className="text-black lg:text-5xl md:text-4xl text-xl px-12 font-bold pt-80">
              I Grow By Helping People In Need
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
