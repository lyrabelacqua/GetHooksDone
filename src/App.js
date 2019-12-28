import React, { useState } from "react";
import Todo from "./components/SingleTodo";
import {
  Heading,
  SubHeading,
  TodoWrapper,
  Form,
  Label,
  Input,
  FormRow,
  ListWrapper,
  ButtonWrapper,
  SubmitButton
} from "./App.styles";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, updateTodos] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    updateTodos(
      todos.concat({
        title: newTodo,
        done: false,
        id: new Date()
      })
    );
    setNewTodo("");
  };

  const toggleDoneStatus = id => {
    const modifiedTodo = todos.findIndex(t => t.id === id);
    updateTodos([
      ...todos.slice(0, modifiedTodo),
      {
        ...todos[modifiedTodo],
        done: !todos[modifiedTodo].done
      },
      ...todos.slice(modifiedTodo + 1)
    ]);
  };

  const deleteTodo = id => {
    updateTodos(todos.filter(todo => todo.id !== id));
  };

  const deleteDone = () => {
    updateTodos(todos.filter(todo => !todo.done));
  };

  const checkAll = () => {
    updateTodos(
      todos.map(todo => ({
        ...todo,
        done: true
      }))
    );
  };

  return (
    <div>
      <Heading>Get Shit Done (with Hooks!)</Heading>
      <SubHeading>(Yet another fascinating To-Do App)</SubHeading>
      <TodoWrapper>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <Label htmlFor="todo">Add a new task</Label>
            <Input
              type="text"
              id="todo"
              value={newTodo}
              onChange={e => {
                setNewTodo(e.target.value);
              }}
            />
          </FormRow>
          <SubmitButton type="submit" value="ADD IT!!!" />
        </Form>

        <ListWrapper>
          {todos.map((todo, id) => (
            <Todo
              key={id}
              todo={todo}
              toggleDoneStatus={toggleDoneStatus}
              deleteTodo={deleteTodo}
            />
          ))}
        </ListWrapper>
        {!!todos.length && (
          <ButtonWrapper parity={todos.length % 2}>
            <button onClick={checkAll}>Check all</button>
            <button onClick={deleteDone}>Delete all done</button>
          </ButtonWrapper>
        )}
      </TodoWrapper>
    </div>
  );
}

export default App;
