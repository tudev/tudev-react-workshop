import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import tudevLogo from './assets/tudev.jpeg'
import './App.css'
import TodoItem from './TodoItem'

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const todoText = formData.get('todo') as string;
    if(!todoText) return;
    
    if (todoText.trim()) {
      setTodos([...todos, todoText.trim()]);
      e.currentTarget.reset();
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tudev.org/" target="_blank">
          <img src={tudevLogo} className="logo tudev" alt="TUDev logo" />
        </a>
      </div>
      <h1>Vite + React + TUDev</h1>
      <div className="card">
        <form onSubmit={handleSubmit} className="flex-r align-center">
          <input 
            type="text" 
            name="todo"
            placeholder="Enter a todo..." 
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="card flex-c align-center">
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onDelete={() => {}}
          />
        ) )}
      </div>

      <p className="read-the-docs">
        Click on the Vite, React, or TUDev logos to learn more
      </p>
    </>
  )
}

export default App
