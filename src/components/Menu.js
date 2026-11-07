
import React from "react";

function Menu({ menuItems }) {
  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <div
          className="menu-item"
          key={item.id}
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <img src={item.img} alt={item.title} />

          <div className="item-info">
            <h3>{item.title}</h3>
            <h4>${item.price}</h4>
            <p>{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
