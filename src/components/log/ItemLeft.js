import React from "react";

function ItemLeft({title}) {
  return (
    <div className="item-left">
      <div className="item-left-title">
        <p className="left-title" style={{color:"#294F62"}}>{title}</p>
      </div>
      <div className="item-left-image"></div>
    </div>
  );
}

export default ItemLeft;
