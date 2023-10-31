import styles from "./menu.css";
import MenuItem from "../menuItem/menuItem";

const MENU = [
  ["California Roll", "Crab meat, cucumber, and avocado", 4.95],
  ["SPICY CALIFORNIA ROLL", "Spicy crab meat, cucumber, and avocado", 4.99],
];

const Menu = () => {
  return /*htmL*/ `
    <div class="${styles.menu}">
        <h1>Our Menu</h1>
        <div class="${styles.menuItemsContainer}">
            ${getMenuItemsHtmlString()}
        </div>
    </div>
    `;
};

function getMenuItemsHtmlString() {
  let htmlStr = "";
  for (let item of MENU) {
    htmlStr += MenuItem(item[0], item[1], item[2]);
  }
  return htmlStr;
}
export default Menu;
