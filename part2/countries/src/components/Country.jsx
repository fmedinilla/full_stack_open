function Country({ country }) {
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
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </>
  );
}

export default Country;
