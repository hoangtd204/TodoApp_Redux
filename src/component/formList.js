import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/formList.css";
import { useDispatch } from "react-redux";
import { setData } from "../Store/Actions/ActionRoot";

function FormList() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

//onchange input
  const IsonChange = (evt) => {
    const newInput = setInput(evt.target.value);
    return newInput;
  };
//Submit Add todo
  const onSubmit = (evt) => {
    evt.preventDefault();
    const uuid = uuidv4();
    const newArray = { id: uuid, task: input };
    console.log(newArray);
    dispatch(setData(newArray));
    setInput("");
  };

  return (
    <div className="form">
      <form className="form-button">
        <label>New todo</label>
        <br />
        <input
          placeholder="New Todo"
          type="text"
          className="input-todo"
          value={input}
          onChange={IsonChange}
        />
        <button className="button-add" onClick={onSubmit}>
          Add Todo
        </button>
      </form>
    </div>
  );
}
export default FormList;
