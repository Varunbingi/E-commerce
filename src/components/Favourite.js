


import { useDispatch,useSelector } from "react-redux";
import { removeItem } from "../utils/favourteSlice";

function Favourite() {
  const FavItems = useSelector((store) => store.favourite.card);
  const dispath = useDispatch();
  const handleRemove=(card)=>{
    dispath(removeItem(card))
  }
  
  return (
    <div className="bg-white text-black min-h-screen ">
      <div>
      <button onClick={()=>dispath( clearItem())}>Clear All</button>
      </div>

    <div>
    {FavItems.map((card)=>(
          <div className="grid grid-cols-2 ">
          <div className="grid justify-center">
          <h1>{card.brand}</h1>
          <h1>{card.title}</h1>
          <h1>
            {card.price}
          </h1>
          </div>
          <div>
          <img src={card.thumbnail} className="w-60 h-60"/>
          </div>
          <button  onClick={()=>handleRemove(card)}>remove</button>
          </div>
          
        ))}
        
    </div>
    </div>);
}
export default Favourite;

