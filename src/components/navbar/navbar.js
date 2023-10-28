import styles from "./navbar.css";

const Navbar = (test) => {
  const navbar = document.createElement("nav");
  navbar.classList.add(styles.navbar);

  navbar.innerHTML = `<h1>Hello ${test}</h1>`;

  return navbar;
};

export default Navbar;
