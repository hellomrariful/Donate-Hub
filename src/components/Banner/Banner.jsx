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
            <h3 className="text-black md:text-5xl text-2xl px-12 font-bold pt-80">
              I Grow By Helping People In Need
            </h3>

            <div className="flex justify-center mt-10">
              <form>
                <div className="flex rounded-lg border border-[#df0404] ">
                  <div className="relative">
                    <input
                      type="text"
                      className="p-4 rounded-lg md:mr-60 md:focus:w-64  outline-none mr-20"
                      placeholder="Search Category here...."
                      required
                      autoComplete="off"
                    />

                    <button
                      type="submit"
                      className="absolute h-full right-0 p-4 text-white bg-[#FF444A] rounded-r-lg"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
