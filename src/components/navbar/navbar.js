import styles from "./navbar.css";
import NavItem from "../navItem/navItem";

const Navbar = (active, callback) => {
  const navbar = document.createElement("nav");
  navbar.classList.add(styles.navbar);

  const ul = document.createElement("ul");
  ul.appendChild(NavItem("Home", callback));
  ul.appendChild(NavItem("Menu", callback));
  ul.appendChild(NavItem("Contact", callback));

  navbar.appendChild(ul);

  setActive(active);

  return { getElement, setActive };

  function getElement() {
    return navbar;
  }

  function setActive(active) {
    Array.from(ul.childNodes).forEach((navItem) => {
      navItem.classList.remove(styles.activeNavItem);

      if (navItem.id === active) {
        navItem.classList.add(styles.activeNavItem);
      }
    });
  }
};

export default Navbar;
