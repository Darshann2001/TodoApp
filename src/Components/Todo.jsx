import React from 'react';

const Todo = ({ todo, setTodo, addTodo }) => {

    return (
        <div className="todo">
            <h1> React Todo App </h1>
            <div className="todo-parent">
                <div className="todo-list-todo">
                    <input type="text" name='todo' placeholder='Create a New Todo'
                        onChange={(e) => setTodo(e.target.value)}
                        value={todo}
                    />
                    <button className='add-btn'
                        onClick={addTodo}>
                        Add Todo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;
