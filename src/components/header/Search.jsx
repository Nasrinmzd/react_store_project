import { SearchNormal1 } from "iconsax-react";

function Search({ searchTerm, setSearchTerm }) {

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  return (
      <div className="flex items-center bg-white p-2 rounded border">
        <SearchNormal1 size="18" color="#000" />
        <input
          className="ml-2 outline-none text-black max-w-32 lg:max-w-80"
          type="Search"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
  );
}

export default Search;
