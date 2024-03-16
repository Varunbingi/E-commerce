import { useEffect, useState } from "react";
import { SINGLE_CATEGORY_URL } from "../utils/Url";

const useCategory = (id) => {
  const [card, setCard] = useState(null);
  useEffect(() => {
    fetchItem();
  }, [card]);
  const fetchItem = async () => {
    const data = await fetch(SINGLE_CATEGORY_URL + id);

    const json = await data.json();
    
    setCard(json);
  };
  return card;
};
export default useCategory;
