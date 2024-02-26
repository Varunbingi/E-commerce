import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ItemsCards from "./ItemsCards";
import { Link } from "react-router-dom";
import DEFAULT_URL from "../utils/Url";

const Body = () => {
  const [cards, setCards] = useState([]);
  const [filterCard, setFilterCard] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [changedUrl, setChangedUrl] = useState(DEFAULT_URL);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    fetchData();
  }, [changedUrl]);
  const fetchData = async () => {
    const data = await fetch(changedUrl);
    const json = await data.json();

    setCards(json?.products);
    setFilterCard(json?.products);
  };
  return cards.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-10">
      <div className="flex gap-2 justify-center">
        <input
          className="border-2 border-black w-[50%] rounded-md px-2"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <button
          className="border-2 bg-red-600 font-semibold text-white px-6 py-2 rounded-lg hover:border-red-600 hover:bg-white hover:text-red-600 hover:font-bold "
          onClick={() => {
            const searchList = cards.filter((res) => {
              return (
                res.brand.toLowerCase().includes(searchItem.toLowerCase()) ||
                res.title.toLowerCase().includes(searchItem.toLowerCase())
              );
            });
            setFilterCard(searchList);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 m-10 ">
        {filterCard.map((card) => (
          <Link to={"/" + card.id} key={card.id}>
            <ItemsCards data={card} key={card.id} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-10">
        <button
          className="bg-yellow-200 px-4 py-2 rounded-md"
          onClick={() => {
            if (skip > 0) {
              setSkip(skip - 20);
            }
            console.log(skip);

            setChangedUrl(
              `https://dummyjson.com/products?skip=${skip}&limit=20`
            );
          }}
        >
          Prev
        </button>
        <button
          className="bg-yellow-200  px-4 py-2 rounded-md"
          onClick={() => {
            if (skip < 80) {
              setSkip(skip + 20);
            }
            console.log(skip);
            setChangedUrl(
              `https://dummyjson.com/products?skip=${skip}&limit=20`
            );
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Body;
