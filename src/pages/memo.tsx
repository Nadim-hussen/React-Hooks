// useMemo vs useCallback :: when you are working with value use memo. But when you are working with function or child component use Callback

import React, { useState, useMemo,FC, useCallback } from "react";

const Memo:FC = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]); // string list/array
  // const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  // for using use memo we no longer have delay in adding todo list.
  // The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
  // In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num:number) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  console.log('finished');

  return num;
};

export default Memo



// useCallback HOOk
// To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.

// Use the useCallback Hook to prevent the Todos component from re-rendering needlessly: