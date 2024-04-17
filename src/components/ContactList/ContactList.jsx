import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  return (
    <ul>
        <li>
          <Contact />
        </li>
    </ul>
  );
};

export default ContactList;