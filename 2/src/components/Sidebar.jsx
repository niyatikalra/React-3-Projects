
import React, { useState } from 'react';

const Sidebar = ({ categories, onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    const filters = {
      category: onFilterChange.category,
      price: { min: parseFloat(minPrice), max: parseFloat(maxPrice) },
    };
    onFilterChange(filters);
  };

  return (
    <div className="sidebar">
      <h3>Filter</h3>
      <div>
        <label>Category:</label>
        <select onChange={(e) => onFilterChange({ category: e.target.value })}>
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Price Range:</label>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Sidebar;
