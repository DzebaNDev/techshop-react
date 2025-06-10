import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <section className="home-hero">
      <div className="overlay">
        <div className="home-content">
          <h1>TechStore — Магазин офісної техніки</h1>
          <p>
            Зручна покупка ноутбуків, МФУ, принтерів та іншої техніки онлайн.
          </p>
          <Link to="/catalog" className="cta-button">
            Перейти до каталогу
          </Link>

          <div className="features">
            <div className="feature">
              <span>🚚</span>
              <p>Швидка доставка</p>
            </div>
            <div className="feature">
              <span>✅</span>
              <p>Гарантія 12 місяців</p>
            </div>
            <div className="feature">
              <span>📞</span>
              <p>Онлайн-підтримка</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
