import React, { useState, useReducer, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import TodoList from "./components/TodoList";
import Todoreducer from "./components/TodoReducer";
function App() {
  const [todos, dispatch] = useReducer(Todoreducer, []);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [user, setUser] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch({ type: "REMOVE_TODO", payload: index });
  };

  const toggleTodo = (index) => {
    dispatch({ type: "TOGGLE_TODO", payload: index });
  };

  const handleEditTodo = (index) => {
    if (editedText.trim() !== "") {
      dispatch({
        type: "EDIT_TODO",
        payload: { index, newText: editedText },
      });
      setEditIndex(null);
      setEditedText("");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-933ad-default-rtdb.firebasio.com/todos.json"
      );
      const data = await response.json();
      setUser(data.results);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Todo App</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="Add a new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button onClick={handleAddTodo}>Add</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={handleRemoveTodo}
            editTodo={handleEditTodo}
            editIndex={editIndex}
            setEditedText={setEditedText}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
// import React, { useState } from "react";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (text) => {
//     setTodos([...todos, { text }]);
//   };

//   const removeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <>
//       <h1 className="d-flex mx-auto my-2 justify-content-center">Todo List</h1>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos} removeTodo={removeTodo} />
//     </>
//   );
// }

// export default App;
