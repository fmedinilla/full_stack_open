import axios from "axios";
import { useState, useEffect } from "react";
import FilterSection from "./components/FilterSection";
import AddSection from "./components/AddSection";
import Phonebook from "./components/Phonebook";

const App = () => {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPeople(res.data));
  }, []);

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
