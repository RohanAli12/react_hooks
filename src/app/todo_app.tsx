"use client";
import React, { useState } from "react";

export default function Todo() {
    //adding the todo
    const [newTodo, setTodo] = useState("");
    //creating the todo
  const [todos, setVal] = useState([
    {
      todotext: "Salman",
      status: true,
    },
    {
      todotext: "Ammad",
      status: false,
    },
    {
      todotext: "Badar",
      status: false,
    },
    {
      todotext: "Hamza",
      status: false,
      
    },
  ]);
  const onClickHandler = (element: any) => {
    console.log("element: ", element);
//Checkbox for making the todo true and false 
    const newTodo = todos.map((todo) => {
      console.log("Todo: ", todo);
      if (todo.todotext == element.todotext) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setVal(newTodo);
  };
//adding Todo
  const addTodoo = () => {
    const addTodo = { todotext: newTodo, status: false };
    const addTodos = [...todos, addTodo];
    setVal(addTodos); //problem is here please correct it
    setTodo("");
  };
  //Deleting Todo
  const deleteTodoo =(meraTodo:any)=>{
    const newTodos = todos.filter((todo) => {
      if (todo.todotext == meraTodo.todotext) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setVal(newTodos);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Add New Todo"
        value={newTodo}
        onChange={(valTodo) => setTodo(valTodo.target.value)}
      />
      <button style={{ margin: '10px' }} onClick={addTodoo}>Add</button>

      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{ listStyle: "none", color: elm.status ? "green" : "red" }}
              key={elm.todotext + " " + elm.status}>
              <input
                type="checkbox"
                checked={elm.status}
                onChange={() => onClickHandler(elm)}
              />
              {elm.todotext + " " + elm.status}
              <button style={{ margin: '10px' }} onClick={()=>deleteTodoo(elm)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
