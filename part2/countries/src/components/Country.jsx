import Weather from "./Weather";

function Country(props) {
  const { country } = props;

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>
        <strong>Capital: </strong>
        {country.capital}
      </p>
      <p>
        <strong>Area: </strong>
        {country.area}
      </p>
      <strong>Languages</strong>
      <ul>
        {Object.values(country.languages).map((lan) => (
          <li key={lan}>{lan}</li>
        ))}
      </ul>
      <img
        style={{ border: "1px solid black", padding: "1rem", width: "120px" }}
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
      />
      <Weather
        lat={country.capitalInfo.latlng[0]}
        lon={country.capitalInfo.latlng[1]}
        city={country.capital}
      />
    </>
  );
}

export default Country;
