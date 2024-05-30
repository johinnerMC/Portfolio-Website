/** @format */

interface Props {
  name: string;
  setActiveNav: (name: string) => void;
  activeNav: string;
}
export const NavItem = ({ activeNav, name, setActiveNav }: Props) => {
  const LinkName = `#${name.toLowerCase()}`;
  return (
    <li className="nav__item">
      <a
        href={LinkName}
        onClick={() => setActiveNav(LinkName)}
        className={`${activeNav === LinkName && "active-link"} nav__link `}
      >
        <i className="uil uil-estate nav__icon"></i> {name}
      </a>
    </li>
  );
};
