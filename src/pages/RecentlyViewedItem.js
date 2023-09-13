import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./RecentlyViewedItem.css";
import { addItem, increaseQuantity } from "../store";
import CartModal from "../components/CartModal";
import useCart from "../hooks/useCart";

function RecentlyViewedItem() {
  const [watchedId, setWatchedId] = useState([]);
  const items = useSelector((state) => state.item);

  useEffect(() => {
    const watchedId = JSON.parse(localStorage.getItem("watched"));
    if (watchedId) setWatchedId(watchedId);
  }, []);

  const matchedItems = watchedId
    .map((watchedId) => items.find((item) => item.id === watchedId))
    .filter(Boolean);

  const deleteItem = (id) => {
    const updateItem = watchedId.filter((item) => item !== id);
    setWatchedId(updateItem);
    localStorage.setItem("watched", JSON.stringify(updateItem));
  };

  const [showModal, setShowModal] = useState(false);
  const { addToCart, isIdExistInCart } = useCart();

  return (
    <>
      <div className="recently-viewed">
        {matchedItems.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <img
                className="product-image"
                src={`https://raw.githubusercontent.com/mimkong/meongmeongdata/master/item${product.id}.jpg`}
                alt={product.title}
              />
              <div className="product-details">
                <h2>{product.title}</h2>
                <p>가격: {product.price}원</p>
              </div>
              <div className="product-actions">
                <button
                  className="add-button"
                  onClick={() => {
                    addToCart(product);
                    setShowModal(true);
                  }}
                >
                  담기
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteItem(product.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default RecentlyViewedItem;
