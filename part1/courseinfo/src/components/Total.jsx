const Total = ({ parts }) => {
  let sum = 0;
  parts.forEach((part) => {
    sum += part.exercises;
  });

  return (
    <p>
      <strong>total of {sum} exercises</strong>
    </p>
  );
};

export default Total;
