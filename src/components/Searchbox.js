import React from 'react';

const Searchbox = (props) => {
  return (
    <form className="searchbox">
      <input
        className="searchbox_input"
        type="search"
        placeholder="Cat Finder"
        onChange={(e) => props.searchCat(e.target.value)}
      />
      <button
        className="button"
        type="search"
        value="Search"
        placeholder="Search"
        onClick={props.foundCat}
      >
        SEARCH
      </button>
    </form>
  );
};

export default Searchbox;
