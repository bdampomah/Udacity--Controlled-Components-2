import React from "react";

function DeleteItem(props) {
  const { onDeleteLastItem, onNoItemsFound } = props;
  return (
    <button onClick={onDeleteLastItem} disabled={onNoItemsFound}>
      Delete Last Item
    </button>
  );
}

export default DeleteItem;
