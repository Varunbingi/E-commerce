


import { useDispatch,useSelector } from "react-redux";
import { clearItem, removeItem } from "../utils/favourteSlice";


function Favourite() {
  const FavItems = useSelector((store) => store.favourite.card);
  const dispath = useDispatch();
  const handleRemove=(card)=>{
    dispath(removeItem(card))
  }
  return(FavItems.length==0)?(
    <div className="bg-white text-black min-h-screen flex justify-center items-center" ><h1 className="text-3xl">add some items</h1></div>
  ): (
    <div className="bg-white text-black min-h-screen p-5 flex flex-col  items-center ">
      <div className="flex justify-end w-full md:w-1/2 p-2">
      <button onClick={()=>dispath(  clearItem())}>Clear All</button>
      </div>

    <div className="flex flex-col gap-5 md:w-1/2 " >
    {FavItems.map((card)=>(
          <div className="grid grid-cols-2 border border-black rounded-md p-2 gap-2   justify-center " key={card.id}> 
          <div className="grid ">
          <h1>{card.brand}</h1>
          <h1>{card.title}</h1>
          <h1>
          ₹{card.price}
          </h1>
          <div className="flex justify-around">
          <button className="bg-red-500 text-white rounded-md md:w-1/3 md:h-1/2 p-1" onClick={()=>handleRemove(card)}>Remove</button>
          <button className="bg-black text-white md:w-1/3 md:h-1/2 rounded-md p-1">Buy Now</button>
          </div>
          </div>
          <div className="grid justify-center">
          <img src={card.thumbnail} className="md:w-60  md:h-60 w-40 h-40"/>
          </div>
         
          </div>
          
        ))}
        
    </div>
    </div>);
}
export default Favourite;

