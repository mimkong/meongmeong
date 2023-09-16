import { useSelector, useDispatch } from "react-redux";
import { addItem, increaseQuantity } from "../store";

function useCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const isIdExistInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const addToCart = (product) => {
    isIdExistInCart(product.id)
      ? dispatch(increaseQuantity(product.id))
      : dispatch(addItem(product));
  };
  return {
    addToCart,
    isIdExistInCart,
  };
}

export default useCart;
