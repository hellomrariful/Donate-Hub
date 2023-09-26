import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";

const DonationDetails = () => {
  const { ID } = useParams();
  const [singleCard, setSingleCard] = useState(null);

  const handelAddToDonation = () => {
    const addedDonationArray = [];

    const donationItem = JSON.parse(localStorage.getItem("donation"));

    if (!donationItem) {
      addedDonationArray.push(singleCard);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));
      toast.success("Thanks for your contribution. Donation added!");
    } else {
      const isExist = donationItem.find((singleCard) => singleCard.ID === ID);
      if (!isExist) {
        addedDonationArray.push(...donationItem, singleCard);
        localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        toast.success("Thanks for your contribution. Donation added!");
      } else {
        swal({
          title: "Error!",
          text: "Already Donate! You can donate to other category.",
          icon: "error",
          button: "Ok",
        });
      }
    }
  };

  useEffect(() => {
    fetch("../donates.json")
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
    <div className="md:mt-20 mt-14 md:px-24 px-10">
      <div className=" relative">
        <img className="w-full" src={singleCard.Picture_Details} alt="" />

        <div className="absolute bottom-0 w-full md:h-24 h-16 bg-[#0B0B0B80]"></div>
      </div>

      <div className="relative md:-mt-[60px] -mt-11 ml-6">
        <Link
          style={btnColor}
          className=" text-white md:py-3 md:px-3 px-2 py-3 rounded"
        >
          <button onClick={handelAddToDonation}>
            Donate {singleCard.Price}
          </button>
          <Toaster position="top-center" reverseOrder={true}></Toaster>
        </Link>
      </div>
      <h1 className="text-black md:text-4xl text-3xl font-bold mt-20 mb-6">
        {singleCard.Title}
      </h1>
      <p className="text-[#0B0B0BB2] font-normal mb-12">
        {singleCard.Description}
      </p>
    </div>
  );
};

export default DonationDetails;
