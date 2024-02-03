const FilterSection = ({ filterValue, handleFilterChange }) => {
  return (
    <div>
      filter shown with{" "}
      <input type="text" value={filterValue} onChange={handleFilterChange} />
    </div>
  );
};

export default FilterSection;
