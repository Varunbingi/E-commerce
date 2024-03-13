import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ItemsCards from "./ItemsCards";
import { Link } from "react-router-dom";
import DEFAULT_URL from "../utils/Url";
import { FaSearch } from "react-icons/fa";


const Body = () => {
  const [cards, setCards] = useState([]);
  const [filterCard, setFilterCard] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [changedUrl, setChangedUrl] = useState(DEFAULT_URL);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
    <div className="   ">
      <div className="flex gap-2 justify-center pt-10">
        <input
          className="border-2 border-black w-1/2 rounded-md px-2"
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
         <span className="hidden md:block">Search </span> 
          <span className="md:hidden font-semibold"><FaSearch /></span>
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-10 ">
        {filterCard.map((card) => (
          <Link to={"/" + card.id} key={card.id}>
            <ItemsCards data={card} key={card.id} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-10 pb-10">
        <button
          className="bg-yellow-200 px-4 py-2 rounded-md"
          onClick={() => {
            if (skip > 0) {
              setSkip(skip - 20);
            }
            

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
