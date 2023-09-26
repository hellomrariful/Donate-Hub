import { useEffect, useState } from "react";
import DonationCard from "../../DonationCard/DonationCard";
import Search from "../Search/Search";

const DonationCards = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("donates.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data);
      });
  }, []);

  const handleSearch = (searchInput) => {
    const filtered = cards.filter((card) =>
      card.Category.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div className="md:grid grid-cols-4 gap-6 md:mt-24 md:mb-32 md:px-24 px-10">
      <Search onSearch={handleSearch} />

      {filteredCards.map((card) => (
        <DonationCard key={card.id} card={card}></DonationCard>
      ))}
    </div>
  );
};

export default DonationCards;
