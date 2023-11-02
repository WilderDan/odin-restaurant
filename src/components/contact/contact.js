import styles from "./contact.css";
import ChefImage from "./images/chef.png";

const Contact = () => {
  return /*html*/ `
        <div class="${styles.contact}">
            <div>
                <h1>Contact Us</h1>
                <p class="${styles.centerAlign}">📞 555-555-5555</p>
            </div>
            <div>
                <h2 class="${styles.centerAlign}">Hours:</h2>
                <ul class="${styles.hours}">
                    <li class="${styles.dayHours}">
                        <p>Monday</p> <p>12:00PM - 10:00PM</p>
                    </li>
                    <li class="${styles.dayHours}">
                        <p>Tuesday</p> <p>12:00PM - 10:00PM</p> 
                    </li>
                    <li class="${styles.dayHours}">
                        <p>Wednesday</p> <p>12:00PM - 10:00PM</p>
                    </li>
                    <li class="${styles.dayHours}">
                        <p>Thursday</p> <p>12:00PM - 10:00PM</p>
                    </li>
                    <li class="${styles.dayHours}">
                        <p>Friday</p> <p>12:00PM - 11:00PM</p>
                    </li>
                    <li class="${styles.dayHours}">
                        <p>Saturday</p> <p>10:00AM - 11:00PM</p>
                    </li>
                    <li class="${styles.dayHours}">
                        <p>Sunday</p> <p>10:00AM - 10:00PM</p>
                    </li>
                </ul>
            </div>

            <img src="${ChefImage}" alt="Chef" />
        </div>`;
};

export default Contact;
