import { useContext } from "react";
import { Store } from "./store";

export const useStore = (mapStateToProps, mapDispatchToProps) => {
  const { state, dispatch } = useContext(Store);

  const mappedState = mapStateToProps
    ? mapStateToProps(state)
    : undefined;

  const mappedActions = mapDispatchToProps
    ? Object.keys(mapDispatchToProps).reduce((acc, action) => ({
      ...acc,
      [action]: function () {
        return dispatch(mapDispatchToProps[action](...arguments))
      },
    }), {})
    : undefined;

  return { ...mappedState, ...mappedActions };
};

// Jest to minimalna implementacja funkcji imitująca connect() w Redux.
// Pozbawiona jest funkcjonalności optymalizacyjncyh jak useEffect z shallow compare / useMemo etc.

// useEffect jako hook działa jak kombicja trzech life cycle methods componentDidMount, componentDidUpdate, and componentWillUnmount
// useEffect to świtne miejsce na side effects