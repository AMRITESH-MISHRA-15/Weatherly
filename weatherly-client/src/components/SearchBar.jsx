// src/components/SearchBar.jsx
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="w-full sm:w-2/3 p-3 rounded-lg bg-white text-black caret-black focus:outline-none shadow-md"
      />
      <button
        type="submit"
        className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
