import { useDispatch,useSelector } from "react-redux";
import { clearCart, removeCart } from "../utils/cartSlice";
import { ImBin2 } from "react-icons/im";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispath = useDispatch();
  const [total,setTotal]=useState(0);

  useEffect(() => {
    
    const totalPrice = cartItems.reduce((acc, currentItem) => {
      return acc + currentItem.price;
    }, 0);
    
    setTotal(totalPrice);
  }, [cartItems]);

  const handleRemove=(card)=>(
    dispath(removeCart(card))
  )

  return(cartItems.length==0)?(
      <div className="bg-white text-black min-h-screen flex justify-center items-center" ><h1 className="md:text-3xl text-2xl">Your cart is empty! add Items to it</h1></div>
    ):
   (
    
    <div className="bg-white text-black min-h-dvh p-5">
      <div className="flex justify-end p-2">
      <button className="bg-red-500 text-white md:px-4 p-1 md:py-2 rounded-md"  onClick={()=>dispath( clearCart())}>Clear Cart</button>
      </div>
      <div className="grid md:grid-cols-[60%,40%] gap-2 ">
      <div className="grid gap-2  " >
        {cartItems.map((card)=>(
          <div className="grid grid-cols-2 border-2 p-2 rounded-md border-black" key={card.id}>

            <div className="grid ">
              <h1>{card.brand}</h1>
              <h1>{card.title}</h1>
              <h1>
              ₹{card.price}
              </h1>
              
              <button className="bg-red-500 text-white rounded-md w-1/2 md:block hidden  " onClick={()=>handleRemove(card)}>Remove
              </button>
              <button className="md:hidden"><ImBin2/></button>
      
              
          </div>
          <img src={card.thumbnail} className="md:w-60 md:h-60 w-40 h-40"/>
          </div>  
        ))}
        </div>
        <div className="p-2 border-2 border-black">
            <h1>SubTotal ({cartItems.length } items) : ₹ {total}</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Procced to Bye</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;


