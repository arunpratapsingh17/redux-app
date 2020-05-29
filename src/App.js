import React from "react";
import Counter from "./Counter";
import { createStore } from "redux";
import { DECREASE, INCREASE, RESET } from "./actions";
import reducer from "./reducers";
import { Provider } from "react-redux";

//setup initial state
const defaultState = {
  count: 76,
  name: "bob",
};

//setup reducer

//setup store
const store = createStore(reducer, defaultState);
store.dispatch({ type: RESET });
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
const App = () => {
  return (
    // Provider ensures that Counter will get everything which store has to offer
    <Provider store={store}>
      <Counter state={store.getState()} />
    </Provider>
  );
};

export default App;
