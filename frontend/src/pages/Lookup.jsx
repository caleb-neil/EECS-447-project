import { useState } from "react";
import { Link } from "react-router-dom";

export default function Lookup() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: fetch results from your backend
    console.log("search for", query);
  };

  return (
    <form className="card" onSubmit={handleSearch}>
      <h1>Lookup</h1>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
      <Link to="/login">Log out</Link>
    </form>
  );
}
