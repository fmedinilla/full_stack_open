function CountryName({ name, onShow }) {
  return (
    <div style={{ padding: "0.5rem", marginTop: "0.5rem" }}>
      <label>{name}</label>
      <button onClick={() => onShow(name)} style={{ marginLeft: "0.5rem" }}>
        show
      </button>
    </div>
  );
}

export default CountryName;
