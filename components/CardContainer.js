import axios from "axios";
import { useState } from "react";
import useCardData from "./utils/useCardData";
import Card from "./Card";

const CardContainer = ({ id }) => {
  const [favorite, setFavorite] = useState(false);

  const { isLoading, data } = useCardData(id);

  if (isLoading) return null;

  return (
    <Card
      {...data}
      isFavorite={favorite}
      favoriteClickHandler={() => {
        setFavorite(!favorite);
      }}
    />
  );
};

export default CardContainer;
