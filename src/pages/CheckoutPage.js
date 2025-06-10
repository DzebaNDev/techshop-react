import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutPage.css";

function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ім’я обов’язкове";
    if (!formData.email.includes("@")) newErrors.email = "Невірний email";
    if (!formData.phone.trim()) newErrors.phone = "Телефон обов’язковий";
    if (!formData.address.trim()) newErrors.address = "Адреса обов’язкова";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Замовлення:", {
      ...formData,
      товари: cartItems,
    });

    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <section className="thank-you">
        <div className="thank-you-box">
          <h2>🎉 Замовлення прийнято!</h2>
          <p>Дякуємо за покупку в TechStore.</p>
          <p>Наш менеджер зв'яжеться з вами найближчим часом.</p>
          <div className="thank-you-buttons">
            <button onClick={() => navigate("/")}>На головну</button>
            <button onClick={() => navigate("/catalog")}>До каталогу</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2>Оформлення замовлення</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          ПІБ:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Телефон:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label>
          Адреса доставки:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          {errors.address && <span className="error">{errors.address}</span>}
        </label>

        <button type="submit">Підтвердити замовлення</button>
      </form>
    </section>
  );
}

export default CheckoutPage;
