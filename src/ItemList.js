import React from "react";
import Item from "./Item.js";

function ItemList(props) {
  const { items } = props;
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ol>
    </div>
  );
}

export default ItemList;
