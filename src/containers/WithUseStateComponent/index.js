import React, { useState } from "react";

const InitialState = {
  value: 0
};

export default () => {
  const [state, setState] = useState(InitialState);

  const handleClick = () => {
    setState({ value: state.value + 1 });
  };

  return (
    <div>
      <p>You clicked {state.value} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

// Hooks muszą być wywoływane z React Function Components (Zawsze).
// Hooks nie mogą być przysłonięte innymi funkcjami np. HOC
// nie moga być wywoływane wewnątrz pętli oraz instrukcji warunkowych