import { useState } from "react";
import FilterSection from "./components/FilterSection";
import AddSection from "./components/AddSection";
import Phonebook from "./components/Phonebook";

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

  const handleAdd = (event) => {
    event.preventDefault();

    const isValid = !people.map((person) => person.name).includes(newName);

    if (!isValid) {
      alert(`${newName} is already added to phonebok`);
      return;
    }

    const person = {
      id: people.length + 1,
      name: newName,
      number: newNumber,
    };

    setPeople(people.concat(person));
    setNewName("");
    setNewNumber("");
  };

  const peopleToShow = !filterBy
    ? people
    : people.filter(
        (person) =>
          person.name.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1
      );

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterSection
        filterValue={filterBy}
        handleFilterChange={(event) => setFilterBy(event.target.value)}
      />
      <AddSection
        newName={newName}
        newNumber={newNumber}
        handleChangeName={(event) => setNewName(event.target.value)}
        handleChangeNumber={(event) => setNewNumber(event.target.value)}
        handleAdd={handleAdd}
      />
      <Phonebook people={peopleToShow} />
    </div>
  );
};

export default App;
