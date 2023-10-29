import styles from "./home.css";
import SushiImage from "./sushi.jpg";
import CookImage from "./osrsCook.png";

const Home = () => {
  return `<div class="${styles.imageContainer}">
        <img src="${SushiImage}" alt="sushi" />
        <div class="${styles.heroOverlay}">
            <p>Sushi Scape<p>
            <img class="${styles.innerImage}" src="${CookImage}" alt="RuneScape Cook" />
            <p>Best food. Best price.</p>
        </div>
    </div>`;
};

export default Home;
