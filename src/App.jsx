import { useState } from "react";
import Search from "./components/Search";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>

        <Search search={search} setSearch={setSearch} />

        <h1 className="text-white"> {search} </h1>
      </div>
    </main>
  );
}
