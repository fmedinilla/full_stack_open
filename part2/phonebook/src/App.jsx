import axios from "axios";
import { useState, useEffect } from "react";
import peopleService from "./services/people";
import FilterSection from "./components/FilterSection";
import AddSection from "./components/AddSection";
import Phonebook from "./components/Phonebook";

const App = () => {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    peopleService
      .getAll()
      .then((data) => setPeople(data))
      .catch(() => alert("Algo ha salido mal..."));
  }, []);

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

    peopleService
      .create(person)
      .then((res) => {
        setPeople(people.concat(res.data));
        setNewName("");
        setNewNumber("");
      })
      .catch(() => alert("Algo ha salido mal..."));
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
