import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://www.ferasdeiratany.com">Feras Deiratany</a>. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
