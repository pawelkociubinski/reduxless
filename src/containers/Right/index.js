import React from "react";
import { Increment, Decrement } from "../../actions";
import { useStore } from "../../useStore";

const mapDispatchToProps = {
  Increment,
  Decrement,
};

export default () => {
  const data = useStore(null, mapDispatchToProps);

  return (
    <>
      <button onClick={() => data.Increment(2)}>Increment!</button>
      <button onClick={data.Decrement}>Decrement!</button>
    </>
  );
};
