import React, { useState } from "react";

function Item({ name, category }) {

  const [ inCart, setInCart ] = useState(false)
  const cartClass = inCart ? "in-cart" : ""
  const cartButton = inCart ? 'Remove From Cart' : "Add to Cart"

  function handleClick() {
    setInCart(() => !inCart)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartButton}t</button>
    </li>
  );
}

export default Item;
