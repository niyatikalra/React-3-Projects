import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import { data } from "./data/data";

const items = data;
const App = () => {
  const [filters, setFilters] = useState({
    category: "",
    price: { min: "", max: "" },
  });

  const categories = items.map((item) => item.category);

  const applyFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const filterItems = () => {
    let filteredItems = items;

    if (filters.category) {
      filteredItems = filteredItems.filter(
        (item) => item.category === filters.category
      );
    }

    if (filters.price.min !== "" && filters.price.max !== "") {
      filteredItems = filteredItems.filter(
        (item) =>
          item.price >= filters.price.min && item.price <= filters.price.max
      );
    }

    return filteredItems;
  };

  const filteredItems = filterItems();

  return (
    <div className="ecommerce-page">
      <Sidebar categories={categories} onFilterChange={applyFilters} />
      <ProductList filteredItems={filteredItems} />
    </div>
  );
};

export default App;
