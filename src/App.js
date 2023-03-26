import './App.css';
import Todo from './Components/Todo';
import TodoList from './Components/TodoList';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo !== '') {
      setTodoList([...todoList, todo])
      console.log(todo)
      console.log(todoList)
      setTodo("");
    }
  }

  const deleteTodo = (value) => {
    const newTodos = todoList.filter((todo) => {
      return todo !== value;
    });
    setTodoList(newTodos)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="app-parent">
            <div className="app-child">
              <Todo todo={todo} setTodo={setTodo} addTodo={addTodo} />
              <TodoList todoList={todoList} deleteTodo={deleteTodo} />
            </div>

            <div className='note'>
              <p>Note</p>
              <span>*Input Todo data for saving tasks to be done </span>
              <span>*Use delete to button to delete the todo data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
