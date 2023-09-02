import Category from "./Category";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import axios from "axios";
import { changeItem } from "../../store";
import { useDispatch } from "react-redux";
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
  let [shopItems, setShopItems] = useState();
  let dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/mimkong/meongmeongdata/master/data.json"
      )
      .then((result) => {
        setShopItems(result.data);
        dispatch(changeItem(result.data));
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
