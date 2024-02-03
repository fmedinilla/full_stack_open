import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "Arto Hellas", number: "688 88 88 88" },
    { id: 2, name: "Martin Fowler", number: "677 77 77 77" },
    { id: 3, name: "David Martinez", number: "655 55 55 55" },
    { id: 4, name: "Isaac Marko", number: "699 99 99 99" },
    { id: 5, name: "Sarah Fer", number: "644 44 44 44" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [peopleToShow, setPeopleToShow] = useState(people);

  const handleFilterChange = (event) => {
    const filterCriteria = event.target.value;
    setFilterBy(filterCriteria);

    if (!filterCriteria) {
      setPeopleToShow(people);
      return;
    }

    setPeopleToShow(
      people.filter(
        (person) =>
          person.name.toLowerCase().indexOf(filterCriteria.toLowerCase()) !== -1
      )
    );
  };

  const handleAdd = (event) => {
    event.preventDefault();

    const isValid = !people.map((person) => person.name).includes(newName);

    if (!isValid) {
      alert(`${newName} is already added to phonebok`);
      return;
    }

    const person = {
      name: newName,
      number: newNumber,
    };
    setPeople(people.concat(person));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <p>
        filter shown with{" "}
        <input type="text" value={filterBy} onChange={handleFilterChange} />
      </p>
      <h2>add a new</h2>
      <form onSubmit={handleAdd}>
        <div>
          name:{" "}
          <input
            type="text"
            onChange={(event) => setNewName(event.target.value)}
            value={newName}
          />
        </div>
        <div>
          number:{" "}
          <input
            type="text"
            onChange={(event) => setNewNumber(event.target.value)}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {peopleToShow.map((person) => (
        <p key={person.name}>
          {person.name}: {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
