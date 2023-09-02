import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/main";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/shop";
import Detail from "./pages/Detail";
import Best from "./pages/Best";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/best" element={<Best />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
