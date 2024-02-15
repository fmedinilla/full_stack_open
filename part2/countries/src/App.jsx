import { useState, useEffect } from "react";
import axios from "axios";

import Country from "./components/Country";
import CountryName from "./components/CountryName";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  let message = "";

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => setCountries(res.data))
      .catch((e) => alert("Something went wrong..."));
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert("Something went wrong...");
      });
  };

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  const country = countriesToShow[0];

  const len = countriesToShow.length;

  if (len > 10) {
    message = "Too many matches, specify another filter";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        find countries{" "}
        <input
          onChange={(evt) => setSearch(evt.target.value)}
          type="text"
          value={search}
        />
      </form>
      <small>{message}</small>
      {len > 1 &&
        len < 10 &&
        countriesToShow.map((country) => (
          <CountryName key={country.name.common} name={country.name.common} />
        ))}
      {len == 1 && <Country country={country} />}
    </>
  );
}

export default App;
