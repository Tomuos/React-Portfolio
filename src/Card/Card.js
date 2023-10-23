import React from 'react';
import CardComponent from './CardComponent';  // Adjust path accordingly
import "./Card.css"

const App = () => {
  const cardsData = [
    {
      url: "https://www.mythrillfiction.com/the-dark-rider",
      alt: "Mythrill",
      coverImage: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
      titleImage: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterImage: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
    },
    {
      url: "https://www.mythrillfiction.com/force-mage",
      alt: "Mythrill",
      coverImage: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      titleImage: "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
      characterImage: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
    }
  ];

  return (
    <div>
      <h1>Your Cards:</h1>
      <CardComponent cardsData={cardsData} />
    </div>
  );
}

export default App;
