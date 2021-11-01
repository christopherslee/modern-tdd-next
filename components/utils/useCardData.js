import axios from "axios";
import { useState, useEffect } from "react";

const useCardData = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => {
        setData({
          id: res.data.id,
          title: res.data.title,
          imageUrl: res.data.url,
        });
        setIsLoading(false);
      });
  }, [id]);
  return { isLoading, data };
};

export default useCardData;
