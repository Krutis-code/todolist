import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React,{  useState,useEffect} from "react";
import TodoList from './components/TodoList';

function App() {
  //state
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
    const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);

//useEffect
  useEffect (()=>{
    filterHandler();
    savaLocal();
    
    
  },[todos,status]);

//Runs once
  useEffect(()=>{
    getLocalTodos();
    
  },
  []);
  //function

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save local
  const savaLocal = () =>{
    
    
      localStorage.setItem("todos",JSON.stringify(todos));
    
  };

  const getLocalTodos = () =>{
    if(localStorage.getItem("todos") == null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Kruti's Todo List</h1>
      </header>
      <Form 
      inputText = {inputText} 
      todos={todos} 
      setInputText={setInputText}
       setTodos={setTodos}
       setStatus={setStatus}
       status={status}
       
       >

       </Form>
      <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
