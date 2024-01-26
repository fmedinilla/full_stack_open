import { useState } from "react";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad, average, positive, total }) => {
  if (total === 0) return <p>No feedback given</p>;

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="average" value={average.toFixed(1)} />
          <StatisticLine text="positive" value={`${positive.toFixed(1)} %`} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    const newGood = good + 1;
    const newTotal = total + 1;
    const sum = newGood - bad;
    const avg = sum / newTotal;
    const porcentage = (newGood / newTotal) * 100;

    setGood(newGood);
    setTotal(newTotal);
    setAverage(avg);
    setPositive(porcentage);
  };

  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    const newTotal = total + 1;
    const sum = good - bad;
    const avg = sum / newTotal;
    const porcentage = (good / newTotal) * 100;

    setNeutral(newNeutral);
    setTotal(newTotal);
    setAverage(avg);
    setPositive(porcentage);
  };

  const handleBad = () => {
    const newBad = bad + 1;
    const newTotal = total + 1;
    const sum = good - newBad;
    const avg = sum / newTotal;
    const porcentage = (good / newTotal) * 100;

    setBad(newBad);
    setTotal(newTotal);
    setAverage(avg);
    setPositive(porcentage);
  };

  return (
    <>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        positive={positive}
        total={total}
      />
    </>
  );
};

export default App;
