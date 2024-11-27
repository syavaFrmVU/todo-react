import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  function add() {
    const list = todos;
    list.push(text);
    setTodos(list);
    setText('')
  }

  function updateText(e) {
    setText(e.target.value)
  }

  function clean() {
    setTodos([])
  }

  function deleteTodo(index) {
    const newList = [...todos];
    newList.splice(index, 1); 
    setTodos(newList);
  }

  return (
    <div className="App">
      <h1>Список задач</h1>
      <input type='text' value={text} onChange={updateText}/>
      <button onClick={add}>Добавить</button>
      <button onClick={clean}>Очистить</button>

      <ul>
        {todos.map((todo, index)=>(
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
