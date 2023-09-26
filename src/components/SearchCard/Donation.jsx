// Donation.js
import React, { useEffect, useState } from "react";
import DonationCard from "./DonationCard"; // Import the DonationCard component
import Search from "./Search"; // Import the Search component

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // Fetch your donations data here and set it using setDonations
    // For example, you can fetch it from a JSON file or an API
    fetch("/public/donates.json")
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter the donations based on the searchInput
    const filteredDonations = donations.filter((donation) =>
      donation.Category.toLowerCase().includes(searchInput.toLowerCase())
    );
    // Update the state with the filtered donations
    setDonations(filteredDonations);
  };

  return (
    <div>
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <div className="grid grid-cols-2 px-24 mt-20 gap-6">
        {donations.map((donation) => (
          <DonationCard key={donation.ID} card={donation} />
        ))}
      </div>
    </div>
  );
};

export default Donation;
