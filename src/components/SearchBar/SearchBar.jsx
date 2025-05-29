import "./SearchBar.css"

function SearchBar(props) {
  const handleSearch = (event) => {
    props.setSearchInputValue(event.target.value);
  };

  return (
    <div className="searchBarContainer">
      <h3>Find a character</h3>
      <input
        type="text"
        onChange={handleSearch}
        value={props.searchInputValue}
        placeholder="Type de name..."
      />
      <p></p>
      <button onClick={props.handleResetSearch}>Back ❌</button> 
    </div>
  );
}

export default SearchBar;
