import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import TodoList from "./TodoList";

function Todo({ todos, deleteList, update, complete}) {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const editSubmit = (text) => {
    update(edit.id, text);
    setEdit({
      id: null,
      text: "",
    });
  };

  if (edit.id) {
    return <TodoList edit={edit} onSubmit={editSubmit} />;
  }

  return todos.map((todo, index) => (
    <div key={index} className ={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      <div key={todo.id} onClick = {() => complete(todo.id)}>{todo.text}</div>
      <div className = "icons">
        <MdDeleteSweep onClick={() => deleteList(todo.id)} className ="delete-icon"/>
        <TiEdit
          onClick={() =>
            setEdit({
              id: todo.id,
              text: todo.text,
            })
          }
          className = "edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
