import { useState } from 'react';
import './App.css';

const Square = ({ title }) => {
  return (
    <div className='square-style'>
      <p />{title}
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([]);

  const [newTitle, setNewTitle] = useState('');
  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const addNewTodo = () => {
    setTodos([...todos, { title: newTitle, id: Date.now() }]);
    setNewTitle('');
  };

  return (
    <div>
      <div className='input-style'>
        <input value={newTitle} onChange={handleChange} />
        <button onClick={addNewTodo}>Add</button>
      </div>

      <h1 className='header-style'>Todo List</h1>

      <div className='working-list'>
        {todos.map((todo) => {
          return (
            <Square
              title={todo.title}
              key={`todo-${todo.id}`}
            />
          )
        })}
      </div>
    </div>
  );
};

export default App;