const AddSection = ({
  newName,
  newNumber,
  handleAdd,
  handleChangeName,
  handleChangeNumber,
}) => {
  return (
    <div>
      <h2>add a new</h2>
      <form onSubmit={handleAdd}>
        <div>
          name:{" "}
          <input type="text" onChange={handleChangeName} value={newName} />
        </div>
        <div>
          number:{" "}
          <input type="text" onChange={handleChangeNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddSection;
