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
      />
    </div>
  );
}

export default SearchBar;
