/** @format */

import { useState } from "react";
import "./header.css";
import { NavItem } from "./NavItem";
import { NavLink } from "react-router-dom";

interface navItem {
  name: string;
  iconClass: string;
  href: string;
}
const navData: navItem[] = [
  {
    name: "Home",
    iconClass: "uil-estate",
    href: "/home",
  },
  {
    name: "Portfolio",
    iconClass: "uil-scenery",
    href: "/portfolio",
  },
  {
    name: "Writing",
    iconClass: "uil-file-alt",
    href: "/writing",
  },
];

export const Header = () => {
  /*=============== Change Background eader ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    this.scrollY >= 80
      ? header?.classList.add("scroll-header")
      : header?.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/home" className="nav__logo">
          Johinner
        </NavLink>

        <div className={`nav__menu ${showMenu && "show-menu"}`}>
          <ul className="nav__list grid">
            {navData.map((item) => (
              <NavItem
                name={item.name}
                key={item.href}
                icon={item.iconClass}
                href={item.href}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
