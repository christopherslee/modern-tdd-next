import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

const CardContainer = ({ id }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }, [id]);

  if (!data) return null;

  return <Card title={data.title} imageUrl={data.url} />;
};

export default CardContainer;
