import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products"
import { items } from "./ItemsData"
import "./ProductDetails.css"


function ProductDetails() {
  const [details, setDetails] = useState({});
  const [similarItems, setSimilarItems] =useState([])
  const { id } = useParams();
  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setDetails(filterProduct[0]); 
    
    const filterSimilarProducts= items.filter((similarItems)=> similarItems.category===details.category)
    setSimilarItems(filterSimilarProducts)
  }, [id,details.category ]);

  return (
    <>
    
    <div className="container con">
      <div className="img">
        <img src={details.imgSrc} alt="" />
      </div>
      
      <div >
      <h1 className="card-title">{details.title}</h1>
                  <p className="card-text">{details.description}</p>
                  <button className="btn btn-primary btn-sm">
                    {"₹ "}
                    {details.price}
                  </button>
                  <button className="btn btn-warning btn-sm mx-3">
                    {" "}
                    Add To Cart
                  </button>      
                </div>
      </div>
      <h2 className="text-center mt-5 ">Similar Products:</h2>
   <Products items={similarItems}/>
    </>
  )
}

export default ProductDetails;
