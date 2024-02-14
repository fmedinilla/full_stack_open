import Contact from "./Contact";

const Phonebook = ({ people, onDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {people.map((person) => (
        <Contact onDelete={onDelete} key={person.id} person={person} />
      ))}
    </div>
  );
};

export default Phonebook;
