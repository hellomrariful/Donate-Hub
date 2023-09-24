import { useEffect, useState } from "react";
import DonationCard from "../../DonationCard/DonationCard";

const DonationCards = () => {
  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    fetch("donates.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="md:grid grid-cols-4 gap-6 md:mt-24 md:mb-32 md:px-24 px-10">
      {cards.map((card) => (
        <DonationCard key={card.id} card={card}></DonationCard>
      ))}
    </div>
  );
};

export default DonationCards;
