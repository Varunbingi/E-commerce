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
    
    <div className=" w-full bg-gray-200 " >
      
      <ul className="flex flex-col md:flex-row md:flex-wrap text-black">
        {listCategories.map((list)=>(
        <Link to={"/category/"+list} key={list}><li className="py-2 px-4 border-t-2 border-black md:border-none" >{list} </li></Link>))}
      </ul>
     
    </div>
  )
};

export default Categories;
