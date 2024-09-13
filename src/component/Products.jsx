import React from "react";

import {Link} from "react-router-dom" ;

function Products({items} ) {
  return (
    <div className="container my-5">
      <div className="row">
        {items.map((products) => {
          return (
            <div key={products.id} className="col-lg-3 text-center my-5">
              <div className="card" style={{ width: "18rem" }}>
                <Link
                  to={`/product/${products.id}`}
                  style={{
                   display:'flex',
                    justifycontent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src={products.imgSrc}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{products.title}</h5>
                  <p className="card-text">{products.description}</p>
                  <button className="btn btn-primary btn-sm">
                    {"₹ "}
                    {products.price}
                  </button>
                  <button className="btn btn-warning btn-sm mx-3">
                    {" "}
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
