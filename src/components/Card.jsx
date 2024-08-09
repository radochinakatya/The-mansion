import { useState } from "react";
import SmallButton from "./Buttons/small_button";

const Card = () => {
  const [cards, setCards] = useState([
    {
      title: "Новостройки",
      description: "Подбор/преобретение квартиры в новостройке",
      image: "card1.png",
    },
    {
      title: "Вторичные",
      description: "Подбор/преобретение квартиры во вторичке",
      image: "card2.png",
    },
    {
      title: "Продажа",
      description: "Продажа квартир",
      image: "card3.png",
    },
    {
      title: "Аренда",
      description: "Аренда коммерческих и не коммерческих помещений",
      image: "card4.png",
    },
    {
      title: "Ипотека",
      description: "Помощь в оформлении ипотеки",
      image: "card5.png",
    },
  ]);

  return (
    <div className="services">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} />
          <div className="card_description">
            <p className="title">{card.title}</p>
            <p className="description">{card.description}</p>
            <div className="card_button">
              <SmallButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
