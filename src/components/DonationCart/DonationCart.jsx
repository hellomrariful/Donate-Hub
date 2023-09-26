import { Link } from "react-router-dom";

const DonationCart = ({ card }) => {
  const { ID, Cart_Picture, Category, Title, Card_bg, Text_bg, Price } =
    card || {};

  const CardStyle = {
    backgroundColor: Card_bg,
    borderRadius: "8px",
  };
  const categoryStyle = {
    backgroundColor: Text_bg,
  };

  const titleStyle = {
    color: Text_bg,
    backgroundColor: Card_bg,
  };
  const PriceStyle = {
    color: Text_bg,
  };

  return (
    <div>
      <div style={CardStyle} className="grid grid-cols-2 items-center gap-6">
        <div className=" w-full h-full object-cover">
          <img src={Cart_Picture} alt="" />
        </div>

        <div>
          <p style={titleStyle} className="px-[10px] py-1 w-fit rounded">
            {Category}
          </p>
          <h1 className="md:text-xl font-semibold md:mt-1 md:mb-1 mt-[2px] mb-[2px]">
            {Title}
          </h1>
          <p style={PriceStyle}>{Price}</p>
          <Link to={`/donation/${ID}`}>
            <button
              style={categoryStyle}
              className="text-white md:mt-3 px-2 md:py-2 py-[2px] rounded"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCart;
