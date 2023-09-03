import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/main";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/shop";
import Detail from "./pages/Detail";
import Best from "./pages/Best";
import { changeItem } from "./store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
function App() {
  let dispatch = useDispatch();

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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} exact />
        <Route path="/shop/:id" element={<Detail />} />
        <Route path="/best" element={<Best />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
