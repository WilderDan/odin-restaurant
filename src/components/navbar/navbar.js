import styles from "./navbar.css";
import NavItem from "../navItem/navItem";

const Navbar = () => {
  return `<nav class="${styles.navbar}">
    <ul>
        ${NavItem("Home", "")}
        ${NavItem("Menu", "")}
        ${NavItem("Contact", "")}
    </ul>
  </nav>`;
};

export default Navbar;
