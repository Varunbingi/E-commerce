import { useEffect, useState } from "react";
import { CATEGORIES_URL } from "../utils/Url";
import { Link } from "react-router-dom";

const Categories = () => {
  const [listCategories , setListCategories]=useState([]);
  const fetchData=async()=>{
    const response=await fetch(CATEGORIES_URL);
    const data=await response.json();
    setListCategories(data)
    
  }
  useEffect(()=>{
    fetchData();
  },[])
  if(listCategories.length==0){
    return;
  }
  return (
    
    <div className="p-5" >
      <h1 className="text-2xl font-semibold">
        Categories
      </h1>
      <ul className="p-5">
        {listCategories.map((list)=>(
        <Link to={"/category/"+list}><li className="p-1">{list}</li></Link>))}
      </ul>
     
    </div>
  )
};

export default Categories;
