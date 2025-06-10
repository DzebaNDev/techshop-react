import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Магазин оргтехніки. Всі права захищено.</p>
        <div className="contacts">
          <p>
            📧 Email:{" "}
            <a href="mailto:nazar.dzeba-ip223@nung.edu.ua">
              nazar.dzeba-ip223@nung.edu.ua
            </a>
          </p>
          <p>
            📞 Телефон: <a href="tel:+380978079564">+38 (097) 807 95 64</a>
          </p>
          <p>📍 Адреса: м. Івано-Франківськ, вул. Карпатська, 15</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
