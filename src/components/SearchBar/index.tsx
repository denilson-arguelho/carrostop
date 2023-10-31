import './styles.css'
const SearchBar = () => {
  return (
    <form className="ct-form-container">
      <input className="ct-seach" type="text" placeholder="Digite sua busca" />
      <button className="ct-button" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
