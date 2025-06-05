import axios from "axios";
import { useState } from "react";

export default function Header() {
  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <header>
      <div className="container">
        <section>
          <input onChange={handleInput} value={query} type="text" />
          <button onClick={fetchFilteredMovies}>Cerca</button>
        </section>
      </div>
    </header>
  );
}
