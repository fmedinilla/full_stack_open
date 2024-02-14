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

  const addPerson = () => {
    const person = {
      name: newName,
      number: newNumber,
    };

    peopleService
      .create(person)
      .then((data) => {
        setPeople(people.concat(data));
        setNewName("");
        setNewNumber("");
      })
      .catch(() => alert("Algo ha salido mal..."));
  };

  const updatePerson = () => {
    const personToUpdate = people.find((person) => person.name === newName);
    const personUpdated = { ...personToUpdate, number: newNumber };

    if (
      !confirm(
        `${personToUpdate.name} is already added to phonebook, replace the old number with a new one?`
      )
    )
      return;

    peopleService
      .update(personToUpdate.id, personUpdated)
      .then((data) => {
        setPeople((prev) =>
          prev.map((person) =>
            person.id === personToUpdate.id ? data : person
          )
        );

        setNewName("");
        setNewNumber("");
      })
      .catch(() => alert("Algo ha salido mal..."));
  };

  const handleAdd = (event) => {
    event.preventDefault();

    const isAlready = people.map((person) => person.name).includes(newName);

    if (isAlready) {
      updatePerson();
      return;
    }

    addPerson();
  };

  const handleDelete = (id) => {
    const person = people.find((person) => person.id === id);
    if (!confirm(`Delete ${person.name}?`)) return;
    peopleService
      .deleteById(id)
      .then((data) => {
        setPeople((prev) => prev.filter((person) => person.id !== id));
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
      <Phonebook onDelete={handleDelete} people={peopleToShow} />
    </div>
  );
};

export default App;
