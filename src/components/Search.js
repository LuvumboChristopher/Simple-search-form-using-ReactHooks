import React from 'react';

function Search({searchValue, handleChange}) {
  return (
    <div>
      <input
        value={searchValue}
        type="text"
        placeholder="Type here..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
