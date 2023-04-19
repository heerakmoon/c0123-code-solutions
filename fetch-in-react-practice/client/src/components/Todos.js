import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getTodos () {
      try {
        const res = await fetch(url('/api/todos'));
        if (!res.ok) {
          throw new Error(`HTTP error: status ${res.status}`)
        }
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getTodos();
  }, []);

  async function addTodo(newTodo) {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo)
    }

    try {
      const res = await fetch(url('/api/todos'), req)
      if (!res.ok) {
        throw new Error(`HTTP error: status ${res.status}`)
      }
      const data = await res.json();
      setTodos((prev) => prev.concat(data))
    } catch (error) {
      console.error('Error', error);
    }
  }

  async function toggleCompleted(todoId) {
    const todoIndex = todos.find((todo) => todo.todoId === todoId);
    const req = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: !todoIndex.isCompleted })
    };
    try {
      const res = await fetch(url(`/api/todos/${todoId}`), req);
      if (!res.ok) {
        throw new Error(`Error: status ${res.status}`)
      }
      const updated = await res.json();
      const allTodos = todos.map((original) => original.todoId === updated.todoId ? updated : original);
      setTodos(allTodos);
    } catch (error) {
      setError('Error', error);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
