import styles from "./menuItem.css";

const MenuItem = (title, description, price) => {
  return /*htmL*/ `
      <div class="${styles.menuItem}">
          <div class="${styles.titlePriceContainer}">
              <h3>${title}</h3>
              <p>$${price}</p>
          </div>
          <p>${description}</p>
      </div>
      `;
};

export default MenuItem;
