import styles from "./home.css";
import FoodItem from "../foodItem/foodItem";
import MainImage from "./images/sushiMain.jpg";
import CookImage from "./images/osrsCook.png";
import SushiOneImage from "./images/sushi1.jpg";
import SushiTwoImage from "./images/sushi2.jpg";
import SushiThreeImage from "./images/sushi3.jpg";
import SushiFourImage from "./images/sushi4.jpg";
import SushiFiveImage from "./images/sushi5.jpg";

const Home = () => {
  return /*htmL*/ `
    <div>
      <div class="${styles.imageContainer}">
        <img src="${MainImage}" alt="sushi" />
        <div class="${styles.heroOverlay}">
          <p>Sushi Scape<p>
          <img class="${
            styles.innerImage
          }" src="${CookImage}" alt="RuneScape Cook" />
          <p>Best food. Best price.</p>
        </div>
      </div>

      <div class="${styles.foodItemContainer}">
        ${FoodItem(SushiOneImage, "Tasy Products")}
        ${FoodItem(SushiTwoImage, "Made with Love")}
        ${FoodItem(SushiThreeImage, "Happiness")}
        ${FoodItem(SushiFourImage, "Amazing")}
        ${FoodItem(SushiFiveImage, "Family Owned")}
      </div>

    </div>`;
};

export default Home;
