import styles from "./index.css";
import Navbar from "./components/navbar/navbar.js";
import Home from "./components/home/home.js";
import Menu from "./components/menu/menu.js";
import Contact from "./components/contact/contact.js";

const content = document.getElementById("content");
const header = document.createElement("header");
const main = document.createElement("main");
const navbar = Navbar("Home", callback);

header.appendChild(navbar.getElement());

main.innerHTML = Home();

content.appendChild(header);
content.appendChild(main);

function callback(name) {
  navbar.setActive(name);

  const mainComponent =
    name === "Home" ? Home : name === "Menu" ? Menu : Contact;

  main.innerHTML = mainComponent();
}
