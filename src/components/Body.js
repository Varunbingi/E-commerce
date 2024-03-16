import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ItemsCards from "./ItemsCards";
import { Link } from "react-router-dom";
import DEFAULT_URL, { SEARCH_URL } from "../utils/Url";
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
  useEffect(()=>{
    fetchSearchProducts(searchItem);
  },[])
  const fetchSearchProducts=async(searchItem)=>{
    const response=await fetch(SEARCH_URL+searchItem);
    const searchData=await response.json();
    setFilterCard(searchData?.products);
    setSearchItem('');
  }
  return cards.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="   ">
      <div className="flex gap-2 justify-center pt-10">
        <input
          className="border-2 border-black w-2/3 rounded-md px-2"
          placeholder="Enter name of the product"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <button
          className="border-2 bg-red-600 font-semibold text-white px-6 py-2 rounded-lg hover:border-red-600 hover:bg-white hover:text-red-600 hover:font-bold "
          onClick={()=>fetchSearchProducts(searchItem)}
        >
         <span className="hidden md:block">Search </span> 
          <span className="md:hidden font-semibold"><FaSearch /></span>
        </button>
      </div>
      {filterCard.length===0?<div className="flex justify-center  p-10 md:text-2xl">There is no product with that name</div>:
      (
        <div>
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
      )}
     
      
    </div>
  );
};

export default Body;
