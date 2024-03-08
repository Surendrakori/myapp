import React from 'react'

export default function stateCOmp2() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <ExpComp count={count}/>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Count{count}
      </button>
    </div>
  );
}
