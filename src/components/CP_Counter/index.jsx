import React, { useReducer } from "react";
import produce from "immer";
import { BsCheckLg } from "react-icons/bs";

import "./styles.scss";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_ADDED_VALUE = "change-added-value";
const SUBMIT_ADDED_VALUE_FORM = "submit-added-value-form";

const Counter = () => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: 0,
    addedValue: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseFloat(event.target.value) || 0;
    dispatch({
      type: CHANGE_ADDED_VALUE,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SUBMIT_ADDED_VALUE_FORM,
    });
  };

  return (
    <div className="counter">
      <h1 className="counter__value">{state.count}</h1>
      <div className="counter__btn--container">
        <button
          className="counter__btn btn counter__btn--incr"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="counter__btn btn counter__btn--decr"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>

      <form className="counter__add-value--form" onSubmit={handleSubmit}>
        <label htmlFor="added-value" className="counter__add-value--container">
          <label htmlFor="added-value" className="counter__add-value--label">
            Add
          </label>
          <input
            type={`number`}
            className="counter__add-value form-control"
            id="added-value"
            name="addedValue"
            value={state.addedValue || ""}
            onChange={handleChange}
          />
        </label>
        <button
          className="counter__btn btn counter__btn--add-value"
          type="submit"
        >
          <BsCheckLg />
        </button>
      </form>
    </div>
  );
};

export default Counter;

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT: {
      state.count = state.count + 1;
      return;
    }
    case DECREMENT_COUNT: {
      state.count = state.count - 1;
      return;
    }
    case CHANGE_ADDED_VALUE: {
      state.addedValue = action.payload;
      return;
    }
    case SUBMIT_ADDED_VALUE_FORM: {
      state.count = state.count + state.addedValue;
      state.addedValue = 0;
      return;
    }
    default:
      return;
  }
};
