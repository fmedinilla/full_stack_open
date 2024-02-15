import { useState, useEffect } from "react";
import axios from "axios";

import Country from "./components/Country";
import CountryName from "./components/CountryName";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [countryToShow, setCountryToShow] = useState(null);

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  let country = countriesToShow[0];
  const len = countriesToShow.length;
  let message = "";

  useEffect(() => {
    setCountryToShow(null);
  }, [search]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((e) => alert("Something went wrong..."));
  }, []);

  const handleShow = (name) => {
    const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api/name/";
    const path = BASE_URL + name.toLowerCase();

    axios
      .get(path)
      .then((res) => {
        setCountryToShow(res.data);
      })
      .catch((e) => alert("Something went wrong..."));
  };

  if (len > 10) {
    message = "Too many matches, specify another filter";
  }

  if (len === 0) {
    message = "Nothing matches the filter...";
  }

  return (
    <>
      find countries{" "}
      <input
        onChange={(evt) => setSearch(evt.target.value)}
        type="text"
        value={search}
      />
      <br />
      <small>{message}</small>
      {len > 1 &&
        len < 10 &&
        !countryToShow &&
        countriesToShow.map((country) => (
          <CountryName
            key={country.name.common}
            name={country.name.common}
            onShow={handleShow}
          />
        ))}
      {len === 1 && <Country country={country} />}
      {countryToShow && <Country country={countryToShow} />}
    </>
  );
}

export default App;
