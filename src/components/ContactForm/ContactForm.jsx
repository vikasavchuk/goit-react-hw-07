import css from "./ContactForm.module.css";

const ContactForm = () => {

  return (
    <div>
      <form className={css.form}>
      <label>
        <span>Name</span>
        <input className={css.inpuForm} type="text"/>
      </label>
      <label>
        <span>Number</span>
        <input className={css.inpuForm} type="number"/>
      </label>
      <button className={css.buttoForm}>
        Add contact
      </button>
      </form>
    </div>
  );
};

export default ContactForm;