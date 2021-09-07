import Card from "./Card";

const CardList = ({ cards }) => {
  return cards.map((card, idx) => <Card key={idx} {...card} />);
};

export default CardList;
