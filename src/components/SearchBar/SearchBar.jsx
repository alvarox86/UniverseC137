function SearchBar(props) {
  const handleSearch = (event) => {
    props.setSearchInputValue(event.target.value);
  };

  return (
    <div className="search-bar container">
      <input
        type="text"
        onChange={handleSearch}
        value={props.searchInputValue}
        placeholder="Find a character..."
      />
      <button onClick={props.handleResetSearch}>❌</button> 
    </div>
  );
}

export default SearchBar;
