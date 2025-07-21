import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    console.log("Searching for:", city);
    // Later, call the API here
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center mt-6 px-4"
    >
      <div className="flex w-full max-w-md bg-white shadow-lg rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-5 py-3 text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 flex items-center justify-center"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
