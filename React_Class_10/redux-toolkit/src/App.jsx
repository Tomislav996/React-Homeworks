
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import './App.css'
import { addTodo } from './store/slices/todoSlice';

import { TodoList } from './Components/todosList';

function App() {

  const [todoName, setTodoName] = useState("");
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch();

  const handlerSetTodoName = (event) => {
    const text = event.target.value;
    setTodoName(text)
  }

  const handlerCreateTodo = () => {
    const todoToBeCreated = {
      id: Date.now(),
      title: todoName
    }

    dispatch(addTodo(todoToBeCreated));
    setTodoName("");
  }

  return (
    <>
    <input type="text" placeholder='Enter Todo' value={todoName} onChange={handlerSetTodoName} />
    <button onClick={handlerCreateTodo}>Create todo</button>
    <h3>Todos:</h3>
    <TodoList/>
    </>
  )
}

export default App
