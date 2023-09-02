import Category from "./Category";
import ProductList from "./ProductList";
import { useState } from "react";
import { useSelector } from "react-redux";

function Shop({}) {
  const categoriesData = [
    { name: "ALL", categories: null },
    { name: "LIVING", categories: "living" },
    { name: "WALKING", categories: "walking" },
    { name: "CLEAN", categories: "clean" },
    { name: "FOOD", categories: "food" },
  ];
  let [selectedCategory, setSelectedCategory] = useState(null);
  let handleCategorySelect = (type) => {
    setSelectedCategory(type);
  };
  let a = useSelector((state) => state.item);

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
            ? a
            : a.filter((item) => item.type === selectedCategory)
        }
      />
    </>
  );
}

export default Shop;
