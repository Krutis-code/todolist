import React from 'react';

function Form({setInputText,status,setStatus,setTodos,todos,inputText}) {

  const inputTextHandle = (text) =>{
    
    setInputText(text.target.value);
  };

  
  const submitTodoHandler = (text) =>{
    text.preventDefault();
    
    setTodos([
      ...todos,
      { text:inputText, completed:false, id: Math.random() * 1000}
    ]);
    setInputText(" ");
  
  };
  const statusHandler = (text) =>{
    setStatus(text.target.value);
  };

  return (
    <div>
      <form>
        <input value={inputText} type="text" onChange={inputTextHandle} className="todo-input" />
        <button className="todo-button" onClick={submitTodoHandler} type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler}  name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
