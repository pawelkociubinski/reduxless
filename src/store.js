import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers";

export const Store = createContext({ foo: "bar" });

console.log(Store);
// createContext() Tworzy obiekt z Initial Value "{}" który zostanie dostarczony do Store.Provider.
// Nie trzeba definiować Initial Value w createContext() jeśli zostanie ona dostarczona bezpośrednio do Provider
// Istnieje mozliwość zagniezdzenia createContext().Provider

export const StoreProvider = (props) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  // useReducer to alternatywa dla useState(). useReducer() przyjmuje Initial State i Reducer i zwraca parę [state, dispatch]
  // Zwrócony State i Dispatch jest przekazywany w obiekcie do Store.Provider i przekazywany w dół komponentów

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
