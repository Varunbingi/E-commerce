import { useEffect, useState } from "react";

const useItemCard = (id) => {
  const [card, setCard] = useState(null);
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const data = await fetch("https://dummyjson.com/products/" + id);
    const json = await data.json();
    setCard(json);
  };
  return card;
};
export default useItemCard;
