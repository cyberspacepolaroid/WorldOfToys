import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../store/cartSlice";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>корзина</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>ваша корзина пуста</p>
          <div className="start-shopping">
            <Link to="/">

              <span>начать шоппинг</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
         
          <div className="cart-items">
         
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <Card>
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.title} />
                    
                    <div>
                    
                    <button type="button" class="btn btn-info"
                       onClick={() => handleRemoveFromCart(cartItem)}>
                        удалить
                        </button>
                    </div>

                  </div>
                  <div className="cart-product-price">{cartItem.price}руб.</div>
                  <div className="cart-product-quantity">
                  <button type="button" class="btn btn-dark"
                     onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button type="button" class="btn btn-success"
                     onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    руб.{cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
                </Card>
              ))}
          </div>
          <div className="cart-summary">
          <button type="button" class="btn btn-danger"
             onClick={() => handleClearCart()}>
             очистить корзину
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Итог</span>
                <span className="amount">{cart.cartTotalAmount} руб.</span>
              </div>
              <button type="button" class="btn btn-primary">
                Оформить
              </button>
             
              <div className="continue-shopping">
                <Link to="/">

                  <span>Продолжить шоппинг</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Cart;