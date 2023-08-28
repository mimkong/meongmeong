import Category from "../components/Category";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import axios from "axios";
function Shop({}) {
  const categoriesData = [
    { name: "ALL", categories: null },
    { name: "LIVING", categories: "living" },
    { name: "WALKING", categories: "walking" },
    { name: "CLEAN", categories: "clean" },
    { name: "FOOD", categories: "food" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (type) => {
    setSelectedCategory(type);
  };

  const [shopItems, setShopItems] = useState();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/mimkong/meongmeongdata/master/data.json"
      )
      .then((result) => {
        setShopItems(result.data);
        console.log(shopItems);
      })
      .catch(() => {
        console.log("json 데이터를 불러오는데 실패했습니다.");
      });
  }, []);

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
            ? shopItems
            : shopItems.filter((item) => item.type === selectedCategory)
        }
      />
    </>
  );
}

export default Shop;
