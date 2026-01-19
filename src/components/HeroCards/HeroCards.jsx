import Stack from "./Stack";
import HeroStackCard from "./HeroStackCard";
import { heroCardsData } from "../../constants/index";

const HeroCards = () => {
  return (
    <div className="w-[50vw] h-[50vh]">
      <Stack
        randomRotation
        sensitivity={150}
        sendToBackOnClick
        autoplay
        autoplayDelay={1500}
        pauseOnHover
        cards={heroCardsData.map((card) => (
          <HeroStackCard
            key={card.id}
            index={card.index}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            image={card.image}
          />
        ))}
      />
    </div>
  );
};

export default HeroCards;
