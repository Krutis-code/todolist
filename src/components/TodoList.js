import React from 'react';
import Todo from './Todo';
function TodoList({todos,setTodos,filteredTodos}) {
  //Events

  
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map(todo =>(
            <Todo text={todo.text} todos={todos} todo={todo} setTodos={setTodos} key={todo.id}></Todo>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
