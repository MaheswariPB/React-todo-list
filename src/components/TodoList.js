// import React, { useState, useReducer } from "react";
// import { Form } from "react-bootstrap";
//
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     case "ADD":
//       return [...state, action.todo];
//     // case "REMOVE":
//     //   return [...state, action.todo];
//     // todos: state.todos.filter((_, index) => index !== action.payload),

//     default:
//       return state;
//   }
// };
// const TodoList = () => {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);
//   const [inputValue, setInputValue] = useState("");

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };
//   const addTodoHandler = () => {
//     const newTodo = {
//       id: Math.random(),
//       title: inputValue,
//       complete: false,
//     };
//     dispatch({ type: "ADD", todo: newTodo });
//     setInputValue("");
//   };
//   const removeTodoHandler = (index) => {
//     const newTodo = [...todos];
//     newTodo.splice(index, 1);
//     setInputValue(newTodo);
//     //ispatch({ type: "REMOVE", payload: index });
//   };

//   return (
//     <>
//       <h1
//         style={{ marginBottom: "10px" }}
//         className="d-flex mx-auto my-2 justify-content-center"
//       >
//         Todo List
//       </h1>
//       <Form>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={addTodoHandler}>Add</button>
//       </Form>
//       {todos.map((todo) => (
//         <div
//           key={todo.id}
//           style={{ textDecoration: todo.complete ? "line-through" : "none" }}
//         >
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => handleComplete(todo)}
//             />
//             {todo.title}
//           </label>
//           {/* <button onClick={removeTodoHandler}>Remove</button> */}
//         </div>
//       ))}
//     </>
//   );
// };
// export default TodoList;
//
import React from "react";
import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  toggleTodo,
  removeTodo,
  editTodo,
  editIndex,
  setEditedText,
}) => {
  const listItemStyle = {
    listStyle: "none",
  };

  return (
    <ListGroup>
      {todos.map((todo, index) => (
        <ListGroup.Item key={index} style={listItemStyle}>
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            onClick={() => toggleTodo(index)}
            onRemove={() => removeTodo(index)}
            onEdit={() => editTodo(index)}
            isEditing={index === editIndex}
            editedText={todo.text}
            setEditedText={(text) => setEditedText(text)}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
