/** @format */

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Johinner MC</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/johinnerMC"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://discord.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-discord"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/johinner-madariaga-7595022a2/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Crypticalcoder. All rigths reserved
        </span>
      </div>
    </footer>
  );
};
