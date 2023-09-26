import { useEffect, useState } from "react";
import DonationCart from "../DonationCart/DonationCart";

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
        <p className="h-[80vh] flex justify-center items-center text-3xl font-semibold text-[#FF444A]">
          No Data Found!!!
        </p>
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
