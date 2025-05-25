import React from "react";
import './Products.css';

export const CategoriesNav = ({ setCategory }) => {
    return (
        <ul className="categoriesNav">
            <li className="navbarCat" onClick={() => setCategory('beauty')}>Belleza</li>
            <li className="navbarCat" onClick={() => setCategory('fragrances')}>Fragrances</li>
            <li className="navbarCat" onClick={() => setCategory('home-decoration')}>Decoración</li>
            <li className="navbarCat" onClick={() => setCategory('kitchen-accessories')}>Cocina</li>
            <li className="navbarCat" onClick={() => setCategory('laptops')}>Laptops</li>
            <li className="navbarCat" onClick={() => setCategory('mens-watches')}>Relojes</li>
            <li className="navbarCat" onClick={() => setCategory('skin-care')}>Skin Care</li>
            <li className="navbarCat" onClick={() => setCategory('smartphones')}>Smartphones</li>
        </ul>
    );
}
