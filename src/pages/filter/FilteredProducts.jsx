import React from 'react';
import { Link } from 'react-router-dom';

const FilteredProducts = ({ category, buttonText }) => {
  return (
    <Link to={`/products/${category}`}>
      <button>{buttonText}</button>
    </Link>
  );
};

export default FilteredProducts;
