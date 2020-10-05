import React from 'react';
import PropTypes from 'prop-types';
import productImagePlaceholder from '../assets/product_image_placeholder.png';

const Goods = ({ name, price, image, onAddToCart }) => {
  return (
    <div className="product">
      <h3 className="product-title">{name}</h3>
      <img src={image || productImagePlaceholder} alt="Product image"></img>
      <p>{price}</p>
      <button onClick={onAddToCart}>add to cart</button>
    </div>
  );
};

export default Goods;
