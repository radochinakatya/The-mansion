import { useState } from "react";

const PartnerCard = () => {
  const [cards, setCards] = useState([
    {
      image: "level_logo.png",
    },
    {
      image: "ingrad_logo.png",
    },
    {
      image: "fck_logo.png",
    },
    {
      image: "vtb_logo.png",
    },
  ]);

  return (
    <div className="cards_fifthscreen">
      {cards.map((card, index) => (
        <div className="partner_card" key={index}>
          <img src={card.image} alt={card.image} />
        </div>
      ))}
    </div>
  );
};

export default PartnerCard;
