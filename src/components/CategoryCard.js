import useCategory from "../hooks/useCategory";
import { useParams } from "react-router";
import ItemsCards from "./ItemsCards";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const CategoryCard=()=>{
    const { id } = useParams();

    const card = useCategory(id);
    
    if (card === null) {
        return <Loading />;
      }
  
  return( 
    <>
    <div className="p-5">
      <Link to={"/categories"}>
      <span>
          <FaArrowLeft />
        </span>
      </Link>
    </div>
    <div className="flex flex-wrap gap-5 p-10 justify-center"> 
  
    {card?.products?.map((item)=>(
      

        <Link to={"/"+item.id}>
          <ItemsCards data={item} key={item.id}/>
          </Link>
        
    ))}
    </div>
    </>
   
  )
}
export default CategoryCard;