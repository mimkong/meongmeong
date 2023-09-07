import Category from "./Category";
import ProductList from "./ProductList";
import { useState } from "react";
import { useSelector } from "react-redux";

function Shop({}) {
  const categoriesData = [
    { id: "1", name: "ALL", categories: null },
    { id: "2", name: "LIVING", categories: "living" },
    { id: "3", name: "WALKING", categories: "walking" },
    { id: "4", name: "CLEAN", categories: "clean" },
    { id: "5", name: "FOOD", categories: "food" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (type) => {
    setSelectedCategory(type);
  };
  const items = useSelector((state) => state.item);

  return (
    <>
      <h1>SHOP</h1>
      <Category
        categories={categoriesData}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <ProductList
        shopItems={
          selectedCategory === null
            ? items
            : items.filter((item) => item.type === selectedCategory)
        }
      />
    </>
  );
}

export default Shop;
