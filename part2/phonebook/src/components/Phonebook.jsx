import Contact from "./Contact";

const Phonebook = ({ people }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {people.map((person) => (
        <Contact key={person.id} person={person} />
      ))}
    </div>
  );
};

export default Phonebook;
