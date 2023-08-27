import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/main";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";

import axios from "axios";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
      {/* type: living 인 아이들 가져오기  */}
      <button
        onClick={() => {
          axios
            .get(
              "https://raw.githubusercontent.com/mimkong/meongmeongdata/master/data.json"
            )
            .then((결과) => {
              function living(e) {
                if (e.type === "living") {
                  return true;
                }
              }
              let data = 결과.data;
              console.log(data.filter(living));
            })
            .catch(() => {
              console.log("실패함");
            });
        }}
      >
        버튼
      </button>
    </>
  );
}

export default App;
