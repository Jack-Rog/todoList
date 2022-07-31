import { useState, useRef } from 'react';
import './App.css';

import TodoList from './components/TodoList';

function App() {
  const [list, updateList] = useState ([{id:1, name:'first one'},{id:2, name:'yeet second'}])


  const todoNameRef = useRef()
  const handleSubmit=(e)=>{
      const name = todoNameRef.current.value
      if(name ==="") return 
      console.log(name)

      updateList(prevTodos =>{
          return [...prevTodos, {id:1, name:name}]
      })

      todoNameRef.current.value=null
  }


  return (
    <div className="App">

      <header>
        <h1>Semi Solo Todo List Attempt</h1>
      </header>

      <input   
            type= 'text'
            ref={todoNameRef}
            placeholder='Placeholder text'>

            </input>
        <button onClick={handleSubmit}>Enter new Todo</button>
      <TodoList list={list}/>

    </div>
  );
}

export default App;
