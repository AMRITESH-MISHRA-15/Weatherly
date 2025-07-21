function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md py-4 px-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-center sm:text-left">
          🌦️ Weatherly
        </h1>
        <p className="text-sm sm:text-base text-center sm:text-right opacity-80">
          Your daily weather companion
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
