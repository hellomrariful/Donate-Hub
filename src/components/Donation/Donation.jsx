import { useEffect, useState } from "react";
import DonationCart from "../DonationCart/DonationCart";
import { Link } from "react-router-dom";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("donation"));
    if (donationItem && donationItem.length > 0) {
      setDonation(donationItem);
    } else {
      setNoFound(true);
    }
  }, []);

  return (
    <div>
      {noFound ? (
        <div className="">
          <p className=" mt-80 flex justify-center items-center md:text-3xl text-2xl font-semibold text-[#FF444A]">
          You've not donated yet!!!
         
        </p>
        <Link  to={'/'} ><button className="flex mx-auto bg-[#009444] text-white px-7 py-3 rounded text-xl mt-5">Donate Now</button></Link>
        </div>
      ) : (
        <div>
          <div className="grid lg:grid-cols-2 md:px-24 px-4 mt-20 gap-6 md:grid-cols-1">
            {donation.slice(0, dataLength).map((card) => (
              <DonationCart key={card.id} card={card}></DonationCart>
            ))}
          </div>
          <div
            className={`${
              dataLength >= donation.length ? "hidden" : ""
            } flex justify-center items-center mt-4`}
          >
            <button
              onClick={() => setDataLength(donation.length)}
              className="bg-[#009444] text-white px-7 py-3 rounded text-xl mt-10"
            >
              See All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
