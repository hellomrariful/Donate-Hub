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
        <p className="h-[80vh] flex justify-center items-center">No Data Found!!!</p>
      ) : (
        <div className="grid grid-cols-2 px-24 mt-20 gap-6">
          {donation.slice(0, dataLength).map((card) => (
            <DonationCart key={card.id} card={card}></DonationCart>
          ))}
          <div
            className={`${
              dataLength >= donation.length ? "hidden" : ""
            }`}
          >
            <button
              onClick={() => setDataLength(donation.length)}
              className="bg-[#009444] text-white px-7 py-4 rounded-lg text-xl flex mt-10 mx-auto mb-24"
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

// className={dataLength === donation.length && "hidden"
