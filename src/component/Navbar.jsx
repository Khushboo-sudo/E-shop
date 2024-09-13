import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { items } from "./ItemsData";

function Navbar({ setdata }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filterByCategory = (category) => {
    const device = items.filter((product) => product.category === category);
    setdata(device);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to="/" className="brand-name">
            E-SHOP
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search-Products"
            />
          </form>

          <Link to="/cart" className="cart-logo">
            Cart{" "}
          </Link>
        </div>
        <div className="nav-bar-wrapper">
          <div className="items">Filter</div>
          <div onClick={() => filterByCategory("mobiles")} className="items">
            Mobile
          </div>
          <div onClick={() => filterByCategory("laptops")} className="items">
            laptop
          </div>
          <div onClick={() => filterByCategory("tablets")} className="items">
            Tablet
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
