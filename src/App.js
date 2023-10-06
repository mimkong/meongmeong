import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/shop";
import Detail from "./pages/Detail";
import Best from "./pages/Best";
import Cart from "./pages/Cart";
import Login from "./pages/User/Login";
import Join from "./pages/User/Join";
import Order from "./pages/Order";
import RecentlyViewedItem from "./pages/RecentlyViewedItem";
import { changeItem } from "./store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import OrderComplete from "./pages/OrderComplete";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/mimkong/meongmeongdata/master/data.json"
      )
      .then((result) => {
        dispatch(changeItem(result.data));
      })
      .catch(() => {
        console.log("json 데이터를 불러오는데 실패했습니다.");
      });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <Header />
        <Routes>
          <Route path="/meongmeong" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:id" element={<Detail />} />
          <Route path="/best" element={<Best />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/recently-viewed" element={<RecentlyViewedItem />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-complete" element={<OrderComplete />} />
          <Route path="/shop/:category" element={<Shop />} />
          {/* <Route path="*" element={<div>없는 페이지 입니다.</div>} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
