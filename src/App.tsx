/** @jsxImportSource @emotion/react */

import { isEmpty } from "lodash";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppTitle, AppContainer, CompletedTodosMessage } from "./components";
import { Form, Input, SubmitButton } from "./components/form";
import { List, ListItem, ListItemCheckBox, ListTitle } from "./components/list";

interface Todo {
  id: string;
  value: string;
  completed: boolean;
}

function App() {
  const [todo, setTodo] = useState<null | string>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const haveIncompleteTodos = !isEmpty(incompleteTodos);

  const completedTodos = todos.filter((todo) => todo.completed);
  const haveCompletedTodo = !isEmpty(completedTodos);

  const completedAllTodos = haveCompletedTodo && !haveIncompleteTodos;

  useEffect(() => {
    const storedTodos = window.localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo) {
      return;
    }

    const newTodo = {
      id: uuidv4(),
      value: todo,
      completed: false,
    };

    const updatedTodos = [newTodo, ...todos];

    setTodos(updatedTodos);
    setTodo(null);

    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleToggleTodo = (todo: Todo) => {
    const todoIndex = todos.findIndex((t) => t.id === todo.id);
    todos[todoIndex].completed = !todos[todoIndex].completed;
    setTodos([...todos]);

    window.localStorage.setItem("todos", JSON.stringify([...todos]));
  };

  return (
    <AppContainer>
      <AppTitle />

      <Form onSubmit={handleAddTodo}>
        <Input
          css={{ flex: 1, marginRight: "10px" }}
          value={todo ? todo : ""}
          placeholder="New todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        <SubmitButton disabled={!todo}>Add</SubmitButton>
      </Form>

      {haveIncompleteTodos && (
        <List css={{ marginTop: "20px" }}>
          {incompleteTodos.map((todo, index) => {
            return (
              <ListItem key={`todo-${index}`}>
                <ListItemCheckBox
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo)}
                />
                <p>{todo.value}</p>
              </ListItem>
            );
          })}
        </List>
      )}

      {completedAllTodos && <CompletedTodosMessage />}

      {haveCompletedTodo && (
        <>
          <ListTitle>Completed Todos</ListTitle>
          <List css={{ marginTop: "10px" }}>
            {completedTodos.map((todo, index) => {
              return (
                <ListItem key={`todo-${index}`}>
                  <ListItemCheckBox
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo)}
                  />
                  <p>{todo.value}</p>
                </ListItem>
              );
            })}
          </List>
        </>
      )}
    </AppContainer>
  );
}

export default App;
