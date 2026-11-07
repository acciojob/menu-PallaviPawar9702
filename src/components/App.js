
import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

function App() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "Breakfast",
      price: 15.99,
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400"
    },
    {
      id: 2,
      title: "Country Delight",
      category: "Breakfast",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400"
    },
    {
      id: 3,
      title: "Egg Attack",
      category: "Lunch",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400"
    },
    {
      id: 4,
      title: "Bacon Overflow",
      category: "Lunch",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400"
    },
    {
      id: 5,
      title: "Godzilla Milkshake",
      category: "Shakes",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400"
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "Shakes",
      price: 7.99,
      img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400"
    }
  ]);

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Breakfast", "Lunch", "Shakes"];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div id="main">
      <h1>Our Menu</h1>

      <div className="btn-container">
        {categories.map((category, index) => (
          <button
            key={category}
            id={`filter-btn-${index}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Menu menuItems={filteredItems} />
    </div>
  );
}

export default App;
