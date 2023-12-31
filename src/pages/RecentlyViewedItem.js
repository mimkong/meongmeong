import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "../styles/PageStyle.css";
import CartModal from "../components/CartModal";
import useCart from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import numberWithCommas from "../utils/format";
import useScrollToTop from "../hooks/useScrollToTop";

function RecentlyViewedItem() {
  useScrollToTop();

  const [watchedId, setWatchedId] = useState([]);
  const items = useSelector((state) => state.item);

  useEffect(() => {
    const watchedId = JSON.parse(localStorage.getItem("watched"));
    if (watchedId) setWatchedId(watchedId);
  }, []);

  const matchedItems = watchedId
    .map((watchedId) => items.find((item) => item.id === watchedId))
    .filter(Boolean)
    .reverse();

  const deleteItem = (id) => {
    const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

    if (isConfirmed) {
      const updateItem = watchedId.filter((item) => item !== id);
      setWatchedId(updateItem);
      localStorage.setItem("watched", JSON.stringify(updateItem));
    }
  };

  const [showModal, setShowModal] = useState(false);
  const { addToCart, isIdExistInCart } = useCart();

  const navigate = useNavigate();

  return (
    <>
      <div className="recently-viewed-container">
        <h1>RECENT VIEW</h1>
        {matchedItems.length === 0 ? (
          <p className="empty-text">최근 본 상품 내역이 없습니다.</p>
        ) : (
          matchedItems.map((product) => (
            <div className="product-card">
              <img
                className="product-image"
                src={`https://raw.githubusercontent.com/mimkong/meongmeongdata/master/item${product.id}.jpg`}
                onClick={() => navigate(`/shop/${product.id}`)}
              />
              <div
                className="product-details"
                onClick={() => navigate(`/shop/${product.id}`)}
              >
                <h2>{product.title}</h2>
                <p>{numberWithCommas(product.price)}원</p>
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
          ))
        )}
      </div>
      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default RecentlyViewedItem;
