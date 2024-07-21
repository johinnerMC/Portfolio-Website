/** @format */

interface Props {
  name: string;
  setActiveNav: (name: string) => void;
  activeNav: string;
  icon: string;
  href: string;
}
export const NavItem = ({
  activeNav,
  name,
  setActiveNav,
  icon,
  href,
}: Props) => {
  return (
    <li className="nav__item">
      <a
        href={href}
        onClick={() => setActiveNav(name)}
        className={`${activeNav === name && "active-link"} nav__link `}
      >
        <i className={`uil ${icon} nav__icon`}></i> {name}
      </a>
    </li>
  );
};
