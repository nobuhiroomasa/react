import { stringify } from 'querystring';
import React, {useState,Component} from 'react';
import { tokenToString } from 'typescript';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import signup from './signup';


import './App.css';

function App() {
  const  [inputValue,setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //新しいTodoを作成
    const newToso: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newToso, ...todos]);
    setInputValue("");
  };

  const handleEdit = (id:number,inputValue: string) => {
    const newTodos = todos.map((todo)=>{
      if(todo.id == id){
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleCecked = (id:number, checked: boolean) =>{
    const newTodos = todos.map((todo)=>{
      if(todo.id == id){
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleDelete = (id: number) =>{
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };



  return (
    <div className="App">
      <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">signup</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </Router>
      <div>
        <h2>Todoリスト　with　Typescript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className="inputText" />
          <input type="submit" value="作成"　className="submitButton"></input>
        </form>
        <ul className="todoList">
          {todos.map(todo =>(
            <li key = {todo.id}>
              <input type="text" 
              onChange={(e) => handleEdit(todo.id,e.target.value)} 
              className="inputText" 
              value = {todo.inputValue}
              disabled = {todo.checked}
              />
              <input type="checkbox" 
              onChange={(e) => handleCecked(todo.id,todo.checked)} 
              />
              <button onClick ={() => handleDelete(todo.id)}>消</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
