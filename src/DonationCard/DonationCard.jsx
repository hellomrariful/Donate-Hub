const DonationCard = ({ card }) => {
  const { ID, Picture, Category, Title, Category_bg, Card_bg, Text_bg } = card;

  const CardStyle = {
    backgroundColor: Card_bg,
    borderRadius: "8px",
    paddingBottom: "16px",
  };
  const categoryStyle = {
    backgroundColor: Category_bg,
    color: Text_bg,
  };

  const titleStyle = {
    color: Text_bg,
  };

  return (
    <div className="my-10" style={CardStyle}>
      <img className="w-full" src={Picture} alt="" />
      <p
        style={categoryStyle}
        className="ml-4 mt-4 px-[10px] py-1 w-fit rounded "
      >
        {Category}
      </p>
      <h2 style={titleStyle} className="ml-4 mt-1">
        {Title}
      </h2>
    </div>
  );
};

export default DonationCard;
