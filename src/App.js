import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { changeItem } from "./store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import AppRoutes from "./routing/Route";

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
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
