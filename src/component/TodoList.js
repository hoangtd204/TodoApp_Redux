import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import FormList from "./formList";
import "../styles/TodoList.css";

function TodoList({ DataRedux }) {
  //list Hiden
  const todolist = DataRedux.map((todo) => (
    <Todo key={todo.id} text={todo.task} todo={todo} />
  ));

  return (
    <div className="child-app">
      <h1 className="head-todo">
        Todo List <br /> <span>A simple React Todo List App</span>
      </h1>
      <hr />
      <div className="list">{todolist}</div>
      <FormList />
    </div>
  );
}

const mapStateToProps = (state) => ({
  DataRedux: state,
});

export default connect(mapStateToProps)(TodoList);
