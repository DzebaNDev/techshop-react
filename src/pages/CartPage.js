import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/CartPage.css";

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <section className="cart-section">
      <h2>Ваш кошик</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Кошик порожній.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>Ціна: {item.price} грн</p>
                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p>Сума: {item.price * item.quantity} грн</p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Видалити
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>
              Загальна сума: <strong>{total} грн</strong>
            </p>
            <div className="cart-actions">
              <button className="btn clear" onClick={clearCart}>
                Очистити кошик
              </button>
              <button className="btn checkout" onClick={goToCheckout}>
                Оформити замовлення
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartPage;
