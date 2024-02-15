function Country(props) {
  console.log(props);
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
        style={{ border: "1px solid black", padding: "1rem" }}
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
      />
    </>
  );
}

export default Country;
