import { useDispatch,useSelector } from "react-redux";
import { clearCart, removeCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispath = useDispatch();
  const handleRemove=(card)=>(
    dispath(removeCart(card))
  )
  return(cartItems.length==0)?(
      <div className="bg-white text-black min-h-screen flex justify-center items-center" ><h1 className="text-3xl">Your cart is empty! add Items to it</h1></div>
    ):
   (
    
    <div className="bg-white text-black min-h-screen ">
    
      <button  onClick={()=>dispath(clearCart())}>Clear All</button>
      <div >
        {cartItems.map((card)=>(
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
    </div>
  );
};

export default Cart;
