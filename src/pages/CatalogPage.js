import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";
import { CartContext } from "../context/CartContext";
import "../styles/CatalogPage.css";

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [brandFilter, setBrandFilter] = useState("Всі");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleFilterChange = (e) => {
    setBrandFilter(e.target.value);
  };

  const filteredProducts =
    brandFilter === "Всі"
      ? products
      : products.filter((product) => product.brand === brandFilter);

  const brands = ["Всі", ...new Set(products.map((product) => product.brand))];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section>
      <h2>Каталог товарів</h2>

      <div style={{ margin: "1rem 0" }}>
        <label htmlFor="brand-select">Фільтр за брендом: </label>
        <select
          id="brand-select"
          value={brandFilter}
          onChange={handleFilterChange}
        >
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p>Товари за вибраним брендом не знайдено.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default CatalogPage;
