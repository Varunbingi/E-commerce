import { useParams } from "react-router";
import useItemCard from "../hooks/useItemCard";
import ImageSlider from "./ImageSlider";

import Loading from "./Loading";

import { useDispatch } from "react-redux";
import { addCart } from "../utils/cartSlice";
import { addItem } from "../utils/favourteSlice";
import { VscStarFull } from "react-icons/vsc";



const ItemCard = () => {
  const { id } = useParams();
  const card = useItemCard(id);
  const dispath = useDispatch();
  const handleClickCart = (card) => {
    dispath(addCart(card));
  };
  const handleClick=(card)=>{
    dispath(addItem(card));
  }

  if (card === null) {
    return <Loading />;
  }
  const image = card.images.map((images) => {
    return [images];
  });

  return (
    <div className="bg-white min-h-screen">
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:justify-around p-10   h-full">
      

      <div className="flex flex-wrap  ">
        <ImageSlider images={image} />
      </div>
      <div className="flex flex-col gap-4 justify-around">
        <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">{card?.brand}</h1>
        <h1 className="text-xl">{card?.title}</h1>
        <h1>{card?.description}</h1>
        <h1 className="flex "> <span className="p-1" ><VscStarFull className="bg-green-500 text-white  " /></span>{card?.rating}</h1>
        <h1>Available: {card?.stock}</h1>
        <h1>₹ {Math.floor(card.price-card.price *(card.discountPercentage/100))}</h1>
        <h1 className="line-through">₹ {card.price}</h1>
        
        
        </div>
        <div className="flex justify-between">
          <button className="bg-rose-500 hover:font-semibold py-2 px-4 text-white rounded-xl" onClick={()=>handleClick(card)}>
            Favourite
          </button>
    
          <button className=" bg-gray-700 hover:font-semibold py-2 px-4 text-white rounded-xl"
          onClick={()=>handleClickCart(card)}>
            Add to Cart
          </button>
          <button className="bg-black hover:font-semibold text-white rounded-xl py-2 px-4">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
  
};
export default ItemCard;


