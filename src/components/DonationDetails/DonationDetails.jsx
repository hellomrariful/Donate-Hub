import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const DonationDetails = () => {
  const { ID } = useParams();
  const [singleCard, setSingleCard] = useState(null);

  useEffect(() => {
    fetch("/public/donates.json")
      .then((res) => res.json())
      .then((data) => {
        const card = data.find((card) => card.ID === ID);
        setSingleCard(card);
      });
  }, [ID]);

  const btnColor = {
    background: singleCard ? singleCard.Text_bg : "#FFFFFF",
  };

  if (!singleCard) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={50}
          width={50}
          color=" #FF444A"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#FF444A"
          strokeWidth={4}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  return (
    <div className="mt-20 md:px-24">
      <div className=" relative">
        <img className="w-full" src={singleCard.Picture_Details} alt="" />

        <div className="absolute bottom-0  w-full h-28 bg-[#0B0B0B80]"></div>
      </div>

      <div className="relative -mt-16 ml-6">
        <Link style={btnColor} className=" text-white py-4 px-6 rounded ">
          <button>Donate {singleCard.Price}</button>
        </Link>
      </div>
      <h1 className="text-black text-4xl font-bold mt-20 mb-6">
        {singleCard.Title}
      </h1>
      <p className=" text-[#0B0B0BB2] font-normal mb-12">
        {singleCard.Description}
      </p>
    </div>
  );
};

export default DonationDetails;
