import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/Todo.css";
import { deleteData, updateData } from "../Store/Actions/ActionRoot";
import { useDispatch } from "react-redux";

function Todo({ text, todo }) {
  const [editing, setEditing] = useState(false);
  const [inputUpdate, setUpdate] = useState(todo.task);
  const dispatch = useDispatch();

  //On remove
  const onRemove = (evt) => {
    const isIdRemove = todo.id;
    dispatch(deleteData(isIdRemove));
  };

  //convert
  const onToggle = (evt) => {
    setEditing(true);
  };

  // handle Update
  const handleUpdate = (evt) => {
    const updateInput = setUpdate(evt.target.value);
    return updateInput;
  };
  //On Save
  const onSave = (evt) => {
    const isIdUpdate = todo.id;
    dispatch(updateData(isIdUpdate, inputUpdate));
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="Todo">
        <form className="Todo-edit-form">
          <input
            onChange={handleUpdate}
            value={inputUpdate}
            type="text"
            className="inputSave"
          />
          <button className="buttonSave" onClick={onSave}>
            Save
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="todo-list-true">
        <div className="todo-list">
          <h4 className="textTodo">{text}</h4>
          <div className="button">
            <button className="toggle" onClick={onToggle}>
              <div className="image-toggle"></div>
            </button>
            <button className="remove" onClick={onRemove}>
              <div className="image-remove"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  DataRedux: state,
});

export default connect(mapStateToProps)(Todo);
