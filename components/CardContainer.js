import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";

const CardContainer = ({ id }) => {
  const [favorite, setFavorite] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => {
        setData({
          id: res.data.id,
          title: res.data.title,
          imageUrl: res.data.url,
        });
      });
  }, [id]);

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
