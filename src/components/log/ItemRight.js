import React from "react";

function ItemRight({ children, title, textTitle }) {
  return (
    <div className="item-right">
      <div className="item">
        <div className="item-right-content">
          <div>
            <p className="item-right-title" style={{color: "#294F62", fontSize:"35px"}}>{title}</p>
            <p className="item-right-text">{textTitle}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ItemRight;
