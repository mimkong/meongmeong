import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Shop from "../pages/Shop/shop";
import Detail from "../pages/Detail";
import Best from "../pages/Best";
import Cart from "../pages/Cart";
import Login from "../pages/User/Login";
import Join from "../pages/User/Join";
import Order from "../pages/Order";
import RecentlyViewedItem from "../pages/RecentlyViewedItem";
import OrderComplete from "../pages/OrderComplete";
import Search from "../pages/Search";

function AppRoutes() {
  return (
    <Routes>
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
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<div>없는 페이지 입니다.</div>} />
    </Routes>
  );
}

export default AppRoutes;
