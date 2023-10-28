import styles from "./index.css";
import Navbar from "./components/navbar/navbar.js";

const content = document.getElementById("content");

content.innerHTML = Navbar();
