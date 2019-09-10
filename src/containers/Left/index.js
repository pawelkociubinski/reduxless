import React from "react";
import { useStore } from "../../useStore";

const mapStateToProps = (state) => {
  return {
    value: state.value
  };
};

export default () => {
  const data = useStore(mapStateToProps);

  return (
    <h1>{data.value}</h1>
  );
};
