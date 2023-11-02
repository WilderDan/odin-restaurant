import styles from "./menu.css";
import MenuItem from "../menuItem/menuItem";
import GoblinCookLeftImage from "./images/goblinCookLeft.png";
import GoblinCookRightImage from "./images/goblinCookRight.png";

const MENU = [
  ["California Roll", "Crab meat, cucumber, and avocado", "4.95"],
  ["Vegetable Roll", "Asparagus, cucumber, and avocado", "4.50"],
  ["Hollywood Roll", "Crab meat, cream cheese, and avocado", "7.50"],
  [
    "Shrimp Tempura Roll",
    "Shrimp tempura, cucumber, and with chef sauce",
    "7.50",
  ],
  [
    "Salmon Tempura Roll",
    "Salmon tempura, cucumber, and with chef sauce",
    "6.00",
  ],
  ["Tuna Roll", "Tuna and cucumber", "4.50"],
  ["Spicy Tuna Roll", "Chop spicy tuna, and avocado", "5.50"],
  ["Rock & Roll", "Baked eel, cucumber, and avocado", "6.00"],
  ["Sweet Potato Roll", "Tempura sweet potato", "4.75"],
  ["Spicy California Roll", "Spicy crab meat, cucumber, and avocado", "4.99"],
];

const Menu = () => {
  return /*htmL*/ `
    <div class="${styles.menu}">

        <div class="${styles.menuHeader}">
          <img class="${
            styles.goblinCookImg
          }" src="${GoblinCookLeftImage}" alt="goblin cook" />
          <h1>Our Menu</h1>
          <img class="${
            styles.goblinCookImg
          }" src="${GoblinCookRightImage}" alt="goblin cook" />
        </div>
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
