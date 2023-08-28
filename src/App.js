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
    </>
  );
}

export default App;
