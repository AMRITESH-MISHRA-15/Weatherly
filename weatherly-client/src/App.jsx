import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-10 text-xl text-gray-700">
        Hello World
      </div>
      <SearchBar />
    </>
  );
}

export default App;
