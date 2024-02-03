import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState([
    { name: "Arto Hellas", number: "688888888" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
      <h2>Phonebook</h2>
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
      {people.map((person) => (
        <p key={person.name}>
          {person.name}: {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
