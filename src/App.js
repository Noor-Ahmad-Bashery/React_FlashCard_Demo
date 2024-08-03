import { useState } from "react";

export default function App() {
  return (
    <div>
      <Step />
      <Counter />
    </div>
  );
}

function Step() {
  return <div>hh</div>;
}

function Counter() {
  const [count, setCount] = useState(0);
  const[step,setStep] =useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <>
      <button onClick={() => setStep((s) => s - 1)}>-</button>
      <div>Step: {step}</div>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
<p>

      <button onClick={() => setCount((s) => s - step)}>-</button>
      <div>Count: {count}</div>
      <button onClick={() => setCount((s) => s + step)}>+</button>
</p>
      <p>
        <span>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count}  days from today is `
              : `${Math.abs(count)} days ago was`}
          </span>
          {date.toDateString()}
        </span>
      </p>
    </>
  );
}
