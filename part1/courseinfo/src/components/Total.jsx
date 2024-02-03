const Total = (props) => {
  const [part1, part2, part3] = props.parts;
  let sum = part1.exercises + part2.exercises + part3.exercises;

  return <p>Number of exercises {sum}</p>;
};

export default Total;
