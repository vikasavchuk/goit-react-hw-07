import css from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input 
      className={css.searchImp}
      type="text"/>
    </div>
  );
};

export default SearchBox;