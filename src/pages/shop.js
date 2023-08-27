import Category from "../components/Category";
import { useState } from "react";
import ProductList from "../components/ProducList";
function Shop({}) {
  const categoriesData = [
    { id: 1, name: "ALL" },
    { id: 2, name: "LIVING" },
    { id: 3, name: "WALKING" },
    { id: 4, name: "CLEAN" },
    { id: 5, name: "FOOD" },
  ];
  const productsData = [
    { id: 1, name: "T-Shirt", type: 1 },
    { id: 2, name: "Jeans", type: 1 },
    { id: 3, name: "Sneakers", type: 2 },
    { id: 4, name: "Necklace", type: 3 },
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (type) => {
    setSelectedCategory(type);
  };
  return (
    <>
      <h1>SHOP</h1>
      <Category
        categories={categoriesData}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <ProductList
        products={productsData.filter(
          (product) => product.type === selectedCategory
        )}
      />

      {/* 상품 나열 */}
    </>
  );
}

export default Shop;
