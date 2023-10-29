import styles from "./foodItem.css";

const FoodItem = (imageSrc, caption) => {
  return /*htmL*/ `
    <div class="${styles.foodItem}">
      <h3>${caption}</h3>
      <img src=${imageSrc} alt=${caption}/> 
    </div>`;
};

export default FoodItem;
