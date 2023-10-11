import ProductList from "./Shop/ProductList";
import { useSelector } from "react-redux";
import useScrollToTop from "../hooks/useScrollToTop";

function Best() {
  const a = useSelector((state) => state.item);
  useScrollToTop();
  return (
    <div className="menu-container">
      <h1>BEST</h1>
      <ProductList shopItems={a.filter((item) => item.isBest === true)} />
    </div>
  );
}

export default Best;
