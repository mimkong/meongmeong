import ProductList from "./Shop/ProductList";
import { useSelector } from "react-redux";

function Best() {
  const a = useSelector((state) => state.item);
  return (
    <>
      <h1>BEST</h1>
      <ProductList shopItems={a.filter((item) => item.isBest === true)} />
    </>
  );
}

export default Best;
