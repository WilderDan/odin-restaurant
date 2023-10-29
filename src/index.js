import styles from "./index.css";
import Navbar from "./components/navbar/navbar.js";
import Home from "./components/home/home.js";

const content = document.getElementById("content");

content.innerHTML = Navbar() + Home();
