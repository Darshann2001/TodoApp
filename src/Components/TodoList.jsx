import userEvent from '@testing-library/user-event';
import React, { useRef } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const TodoList = ({ todoList, deleteTodo }) => {

    return (
        <div className='list'>
            {
                todoList?.length > 0 ? (
                    <ol
                        type='1' className='todo-list'>
                        {todoList.map((todoItems, key) => {
                            return <div className="todoo" 
                            // ref={reference}
                            >
                                <li key={key}>
                                    {todoItems}
                                </li>
                                <button className='delete-btn' onClick={() => deleteTodo(todoItems)}><AiFillDelete /></button>
                            </div>
                        })}
                    </ol>
                ) :
                    <div className="empty">
                        <p>No Task Found</p>
                    </div>
            }
        </div>
    );
}

export default TodoList;
