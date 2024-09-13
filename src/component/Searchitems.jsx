import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import { items } from "./ItemsData";


function Searchitems() {
  
  const { term } = useParams();
  const [searchItem, setSearchItem] = useState([]);
  useEffect(() => {
    const filteredProducts = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase()))
      
      
      
      setSearchItem(data)
     
    };
    filteredProducts()
    
  }, [term]);
  return(
  <Products items={searchItem}/>
  )
   
}

export default Searchitems;
